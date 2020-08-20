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
      default:
        return useState<PollStepState>();
      case 'multi':
        return useState<PollStepState>([]);
      case 'text':
        return useState<PollStepState>('');
    }
  });
}