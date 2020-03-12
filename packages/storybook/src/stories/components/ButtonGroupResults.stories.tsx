import React from 'react';

import { ButtonGroupResults } from '@react-poll-widget/ui';

export default {
  title: 'Components|Button group results'
}

export const Right = () => <div style={{padding: '2em'}}>
  <ButtonGroupResults
    results={[
      { label: 'Test 1', score: 25 },
      { label: 'Test 2', score: 75 },
    ]}
  />
</div>;

export const Left = () => <div style={{padding: '2em'}}>
  <ButtonGroupResults
    results={[
      { label: 'Test 1', score: 66 },
      { label: 'Test 2', score: 33 },
    ]}
  />
</div>;