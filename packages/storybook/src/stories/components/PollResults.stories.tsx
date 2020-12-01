import React from 'react';

import { PollResults } from '@react-poll-widget/ui';

export default {
  title: 'Components/Poll results'
}

export const FourResults = () => <div style={{padding: '2em'}}>
  <PollResults
    results={[
      { option: { id: '1', value: '1', label: 'Test 1' }, score: 15 },
      { option: { id: '2', value: '2', label: 'Test 2' }, score: 65 },
      { option: { id: '3', value: '3', label: 'Test 3' }, score: 25 },
      { option: { id: '4', value: '4', label: 'Test 4' }, score: 75 }
    ]}
  />
</div>;