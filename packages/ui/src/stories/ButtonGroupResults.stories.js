import React from 'react';

import { ButtonGroupResults } from '..';

export default {
  title: 'Button group results'
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