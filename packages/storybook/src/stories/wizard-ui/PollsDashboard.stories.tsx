import React from 'react';

import { PollsDashboard } from '@react-poll-widget/ui';

export default {
  title: 'Wizard UI/Forms/Polls dashboard'
};

export const Empty = () => <PollsDashboard polls={[]} />;

export const WithItems = () => <PollsDashboard
  polls={[
    { id: 'test', name: 'poll 1' },
    { id: 'test', name: 'poll 2' },
    { id: 'test', name: 'poll 3' },
    { id: 'test', name: 'poll 4' },
    { id: 'test', name: 'poll 5' }
  ]}
/>;