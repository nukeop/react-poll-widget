import React, { useState } from 'react';

import {
  PollSteps
} from '@react-poll-widget/ui';

export default {
  title: 'Wizard UI|Forms/Poll steps'
}

export const Empty = () => <PollSteps />;

export const ManagePollSteps = () => <PollSteps
  steps={[{
    id: '1',
    title: 'step 1',
    header: 'header of step 1',
    description: 'test desc',
    type: 'single',
    options: []
  },
    {
      id: '2',
      title: 'step 2',
      header: 'header of step 2',
      description: 'test desc',
      type: 'multi',
      options: []
    }
  ]}
/>;
