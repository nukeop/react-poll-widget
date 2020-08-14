import React, { useState } from 'react';
import { PollOption } from '@react-poll-widget/ui';
import _ from 'lodash';
import {
  PollStep,
  PollStepState,
  PollStateReturnType,
  PollWidgetState
} from '../types';

export const usePollState: ((steps: PollStep[]) => PollWidgetState) = steps => {
  return _.map(steps, step => {
    switch (step.type) {
      case 'single':
      case 'button':
        return useState<PollStepState>(_.head(step.options));
      case 'multi':
        return useState<PollStepState>([]);
      case 'text':
        return useState<PollStepState>('');
    }
  });
}