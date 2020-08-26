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
  TextAreaPoll,
  PollOption
} from '@react-poll-widget/ui';

import { PollStep, PollStateReturnType, PollStepState } from '../../types';
import { usePollState } from '../../hooks/usePollState';

type PollComponentProps = {
  currentStep: PollStep,
  currentStepState: PollStateReturnType
};
const PollComponent: React.FC<PollComponentProps> = ({
  currentStep,
  currentStepState
}) => {
  const selected = currentStepState[0];
  const select = currentStepState[1];
  switch (currentStep.type) {


    case 'single':
      return <RadioPoll
        options={currentStep.options}
        selected={selected as PollOption}
        onSelect={select}
      />;
    case 'multi':
      const onSelect = (option: PollOption) => {
        if (Array.isArray(selected)) {
          if (selected.includes(option)) {
            select(selected.filter(value => value !== option));
          } else {
            select([...selected, option]);
          }
        }
      }
      return <RadioPoll
        options={currentStep.options}
        selected={selected as PollOption[]}
        onSelect={onSelect}
        multi
      />;
    case 'button':
      return <PollButtonGroup
        options={currentStep.options}
        selected={selected as PollOption}
        onSelect={select}
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
  onSubmit: (state: PollStepState[]) => void;
}

type PollWidgetComponentProps = PollWidgetContainerProps & {
  currentStepIndex: number;
  goBack: () => void;
  goForward: () => void;
};

const PollWidgetComponent: React.FC<PollWidgetComponentProps> = ({
  trigger,
  transition,
  color,
  steps,
  currentStepIndex,
  onOpen,
  onClose,
  onSubmit,
  goBack,
  goForward
}) => {
  const currentStep = steps[currentStepIndex];
  const pollState = usePollState(steps);

  const submitHandler = useCallback(
    () => onSubmit(
    pollState.map(item => (item as PollStateReturnType)[0])), 
    [onSubmit, pollState]);

  const cannotProceed = currentStep.type === 'single' && (pollState[currentStepIndex] as PollStateReturnType)[0] === undefined;

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
        hasHeader={!_.isNil(currentStep?.description)}
        hasFooter
        hasSteps={steps.length > 1}
        headerContent={currentStep?.title}
        step={currentStepIndex}
        stepsTotal={steps.length}
      >
        <PanelContentHeader>
          {currentStep?.header}
        </PanelContentHeader>
        {currentStep?.description}
        <PollComponent
          currentStep={currentStep}
          currentStepState={pollState[currentStepIndex] as PollStateReturnType}
        />
        <PanelContentFooter
          hasNext={currentStepIndex < steps.length - 1}
          hasBack={currentStepIndex > 0}
          hasSubmit={currentStepIndex === steps.length - 1}
          onBack={goBack}
          onNext={goForward}
          onSubmit={submitHandler}
          nextDisabled={cannotProceed}
          submitDisabled={cannotProceed}
          error={cannotProceed ? 'Select an answer to proceed' : undefined}
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
    goBack={goBack}
    goForward={goForward}
    {...rest}
  />
}

export default PollWidget;