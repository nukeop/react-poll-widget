import React from 'react';

import { PollResults } from '..';

export default {
  title: 'Components/Poll results'
}

export const FourResults = () => <div style={{padding: '2em'}}>
  <PollResults
    results={[
      { label: 'Test 1', score: 15 },
      { label: 'Test 2', score: 65 },
      { label: 'Test 3', score: 25 },
      { label: 'Test 4', score: 75 }
    ]}
  />
</div>;