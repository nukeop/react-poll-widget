import { useState } from 'react';
import {
  PollStep,
  PollStepState,
  PollWidgetState
} from '../types';

export const usePollState: ((steps: PollStep[]) => PollWidgetState) = steps => {
  return steps.map(step => {
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