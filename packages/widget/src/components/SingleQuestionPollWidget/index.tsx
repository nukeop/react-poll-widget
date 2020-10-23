import React from 'react';
import {
  TransitionablePortal,
  TransitionProps,
  PortalProps,
  TransitionablePortalState
} from 'semantic-ui-react';
import isNil from 'lodash/isNil';

import { PanelColor, Panel, PanelContentHeader, RadioPoll, PollButtonGroup } from '@react-poll-widget/ui';

import { PollStepState, PollStep } from '../..';
import { branch } from '../../utils/branch';


type SingleQuestionPollWidgetProps = {
  trigger: React.ReactNode;
  transition?: TransitionProps;
  color: PanelColor;
  loading?: boolean;

  onOpen: (event: null, data: PortalProps & TransitionablePortalState) => void;
  onClose: (event: null, data: PortalProps & TransitionablePortalState) => void;
  onSubmit: (state: PollStepState[]) => void;

  step: PollStep;

  success: boolean;
  SuccessComponent: React.ReactNode; 
};

type SingleQuestionPollComponentProps = SingleQuestionPollWidgetProps & {
};

const SingleQuestionPollComponent: React.FC<SingleQuestionPollComponentProps> = ({
  trigger,
  transition,
  color,
  loading,
  onOpen,
  onClose,
  onSubmit,
  step,

  success,
  SuccessComponent
}) => {
  const PollComponent = step.type === 'single' ? RadioPoll : PollButtonGroup;
  console.log({ SuccessComponent})
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
        hasHeader={!isNil(step.description)}
        hasFooter
        headerContent={step.title}
      >
        <PanelContentHeader>
          {step.header}
        </PanelContentHeader>
        {step.description}

        {
          branch(success, SuccessComponent,
            <PollComponent
              loading={loading}
              options={step.options}
              selected={undefined}
              onSelect={option => onSubmit([option])}
            />
          )
        }
      </Panel>
    </TransitionablePortal>
  );
};

const SingleQuestionPollWidget: React.FC<SingleQuestionPollWidgetProps> = ({
  ...props
}) => {
  return <SingleQuestionPollComponent
    {...props}
  />
};

export default SingleQuestionPollWidget;