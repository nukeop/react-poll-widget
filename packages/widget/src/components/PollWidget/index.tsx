import React from 'react';
import { compose, withState } from 'recompose';
import {
  TransitionablePortal,
  TransitionProps
} from 'semantic-ui-react';
import {
  Panel,
  PanelColor
} from '@react-poll-widget/ui';

import { PollStep } from '../../types';

const PollWidget: React.FC<{
  trigger: React.ReactNode,
  transition?: TransitionProps,
  color: PanelColor,
  steps: PollStep[],
  step: number,
  setStep: (i: number) => void
}> = ({
  trigger,
  transition,
  color,
  steps,
  step,
  setStep
}) => (
      <TransitionablePortal
        closeOnTriggerClick
        trigger={trigger}
        transition={transition}
      >
        <Panel
          color={color}
          hasHeader
          hasFooter
          headerContent={steps[step]?.title}
        >
          text

        </Panel>
      </TransitionablePortal>
    )

export default compose(
  withState('step', 'setStep', 0)
)
(PollWidget);