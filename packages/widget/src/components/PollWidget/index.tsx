import React from 'react';
import _ from 'lodash';
import { compose, withHandlers, withState } from 'recompose';
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
  RadioPollOption,
  PollButtonGroup,
  TextAreaPoll
} from '@react-poll-widget/ui';

import { PollStep, PollType } from '../../types';

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
        buttons={currentStep.options}
      />;
    case 'text':
      return <TextAreaPoll />;
    default:
      return <Message error>Unrecognized poll type.</Message>;
  }
}

type PollWidgetProps = {
  trigger: React.ReactNode;
  transition?: TransitionProps;
  color: PanelColor;
  steps: PollStep[];
  step: number;
  setStep: (i: number) => void;
  onOpen: (event: null, data: PortalProps & TransitionablePortalState) => void;
  onClose: (event: null, data: PortalProps & TransitionablePortalState) => void;
  goBack: () => void;
  goForward: () => void;
};

const PollWidget: React.FC<PollWidgetProps> = ({
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

export default compose(
  withState('step', 'setStep', 0),
  withHandlers({
    goBack: ({ setStep, step }: PollWidgetProps) => () => setStep(Math.max(step - 1, 0)),
    goForward: ({ setStep, step, steps }: PollWidgetProps) => () => setStep(Math.min(step + 1, steps.length - 1))
  })
)
  (PollWidget);