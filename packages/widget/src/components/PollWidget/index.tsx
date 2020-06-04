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
  PollOption,
  PollButtonGroup,
  TextAreaPoll
} from '@react-poll-widget/ui';

import { PollStep } from '../../types';

const PollComponent: React.FC<{ currentStep: PollStep }> = ({ currentStep }) => {
  switch (currentStep.type) {
    case 'single':
      return <RadioPoll
        options={currentStep.options}
      />;
    case 'multi':
      return <RadioPoll
        options={currentStep.options}
      />;
    case 'button':
      return <PollButtonGroup
        options={currentStep.options}
        selectOption={() => {}}
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
  step: number;
  setStep: (i: number) => void;
  goBack: () => void;
  goForward: () => void;
};

const PollWidgetComponent: React.FC<PollWidgetComponentProps> = ({
  trigger,
  transition,
  color,
  steps,
  step,
  setStep,
  onOpen,
  onClose,
  goBack,
  goForward
}) => {
  const currentStep: PollStep = steps[step];
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
        <PollComponent currentStep={currentStep} />
        <PanelContentFooter
          hasNext={step < steps.length - 1}
          hasBack={step > 0}
          hasSubmit={step === steps.length - 1}
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
  const [step, setStep] = useState(0);
  const goBack = useCallback(
    () => setStep(Math.max(step - 1, 0)),
    [step, setStep]
  );
  const goForward = useCallback(
    () => setStep(Math.min(step + 1, steps.length - 1)),
    [steps, step, setStep]
  );

  return <PollWidgetComponent
    steps={steps}
    step={step}
    setStep={setStep}
    goBack={goBack}
    goForward={goForward}
    {...rest}
  />
}

export default PollWidget;