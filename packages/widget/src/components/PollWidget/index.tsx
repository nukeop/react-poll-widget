import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import {
  Message,
  TransitionablePortal,
  TransitionProps,
  PortalProps,
  TransitionablePortalState
} from 'semantic-ui-react';
import {
  Panel,
  PanelColor,
  PanelContentHeader,
  PanelContentFooter,
  RadioPoll,
  PollButtonGroup,
  TextAreaPoll
} from '@react-poll-widget/ui';

import { PollStep, PollWidgetState, PollStateReturnType, PollStepState } from '../../types';
import { usePollState } from '../../hooks/usePollState';

type PollComponentProps = {
  currentStep: PollStep,
  currentStepState: PollStateReturnType
};
const PollComponent: React.FC<PollComponentProps> = ({
  currentStep,
  currentStepState
}) => {
  switch (currentStep.type) {
    case 'single':
      const onSelect = currentStepState[1];
      return <RadioPoll
        options={currentStep.options}
        onSelect={onSelect}
      />;
    case 'multi':
      return <RadioPoll
        options={currentStep.options}
      />;
    case 'button':
      return <PollButtonGroup
        options={currentStep.options}
        selectOption={() => { }}
      />;
    case 'text':
      return <TextAreaPoll />;
    default:
      return <Message error>Unrecognized poll type.</Message>;
  }
}

type PollWidgetContainerProps = {
  trigger: React.ReactNode;
  transition?: TransitionProps;
  color: PanelColor;
  steps: PollStep[];

  onOpen: (event: null, data: PortalProps & TransitionablePortalState) => void;
  onClose: (event: null, data: PortalProps & TransitionablePortalState) => void;
}

type PollWidgetComponentProps = PollWidgetContainerProps & {
  currentStepIndex: number;
  setStep: (i: number) => void;
  goBack: () => void;
  goForward: () => void;
};

const PollWidgetComponent: React.FC<PollWidgetComponentProps> = ({
  trigger,
  transition,
  color,
  steps,
  currentStepIndex,
  setStep,
  onOpen,
  onClose,
  goBack,
  goForward
}) => {
  const currentStep: PollStep = steps[currentStepIndex];
  const stepsStates = steps.map(step => useState<PollStepState>());
  const pollState: PollWidgetState = usePollState(steps);

  return (
    <TransitionablePortal
      closeOnTriggerClick
      closeOnDocumentClick={false}
      trigger={trigger}
      transition={transition}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Panel
        color={color}
        hasHeader={!_.isNull(currentStep?.description)}
        hasFooter
        hasSteps={steps.length > 1}
        headerContent={currentStep?.title}
      >
        <PanelContentHeader>
          {currentStep?.header}
        </PanelContentHeader>
        {currentStep?.description}
        <PollComponent
          currentStep={currentStep}
          currentStepState={stepsStates[currentStepIndex]}
        />
        <PanelContentFooter
          hasNext={currentStepIndex < steps.length - 1}
          hasBack={currentStepIndex > 0}
          hasSubmit={currentStepIndex === steps.length - 1}
          onBack={goBack}
          onNext={goForward}
        />
      </Panel>
    </TransitionablePortal>
  )
}

const PollWidget: React.FC<PollWidgetContainerProps> = ({
  steps,
  ...rest
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const goBack = useCallback(
    () => setCurrentStepIndex(Math.max(currentStepIndex - 1, 0)),
    [currentStepIndex, setCurrentStepIndex]
  );
  const goForward = useCallback(
    () => setCurrentStepIndex(Math.min(currentStepIndex + 1, steps.length - 1)),
    [steps, currentStepIndex, setCurrentStepIndex]
  );

  return <PollWidgetComponent
    steps={steps}
    currentStepIndex={currentStepIndex}
    setStep={setCurrentStepIndex}
    goBack={goBack}
    goForward={goForward}
    {...rest}
  />
}

export default PollWidget;