import _ from 'lodash';
import { PollStep } from "../types";
import { useState } from 'react';

export const usePollState = (steps: PollStep[]) => {
  const pollState = _.map(steps, step => {
    switch(step.type) {
      case 'single':
        return useState(_.head(step.options));
      case 'button':
        return useState(_.head(step.options));
      case 'multi':
        return useState([]);
      default:
    }
  });

  return pollState;
}