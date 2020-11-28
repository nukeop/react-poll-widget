import React, { useCallback, useState } from 'react';

import {
  PollSteps
} from '@react-poll-widget/ui';
import { PollStep, StepType } from '@react-poll-widget/ui/src/components/types';

export default {
  title: 'Wizard UI|Forms/Poll steps'
}

export const Empty = () => <PollSteps />;

export const ManagePollSteps = () => {
  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const [steps, setSteps] = useState<(PollStep & { href: string; })[]>([{
    id: '1',
    title: 'step 1',
    header: 'header of step 1',
    description: 'test desc',
    type: StepType.SINGLE,
    options: [{
      id: '1',
      label: 'Option 1',
      value: '1'
    }, {
      id: '2',
      label: 'Option 2',
      value: '2'
    }],
    href: 'step1'
  },
  {
    id: '2',
    title: 'step 2',
    header: 'header of step 2',
    description: 'test desc',
    type: StepType.MULTI,
    options: [],
    href: 'step2'
  },
  {
    id: '3',
    title: 'step 3',
    header: 'header of step 3',
    description: 'test desc',
    type: StepType.BUTTON,
    options: [],
    href: 'step3'
  }
  ]);
  const onDragEnd = useCallback((result: any) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(steps, result.source.index, result.destination.index);
    setSteps(items);
  }, [steps]);

  return <PollSteps
    steps={steps}
    onDragEnd={onDragEnd}
    onChangeOption={(optionId, newValue) => console.log(optionId, newValue)}
    onDeleteOption={alert}
    onAddOption={alert}
  />;
}