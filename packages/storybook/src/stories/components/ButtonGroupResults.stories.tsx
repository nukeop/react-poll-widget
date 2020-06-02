import React from 'react';

import { ButtonGroupResults } from '@react-poll-widget/ui';

export default {
  title: 'Components|Button group results'
}

export const Right = () => <div style={{padding: '2em'}}>
  <ButtonGroupResults
    results={[
      { option: { id: '1', value: '1', label: 'Test 1' }, score: 25 },
      { option: { id: '2', value: '2',  label: 'Test 2' }, score: 75 },
    ]}
  />
</div>;

export const Left = () => <div style={{padding: '2em'}}>
  <ButtonGroupResults
    results={[
      { option: { id: '1', value: '1', label: 'Test 1' }, score: 66 },
      { option: { id: '2', value: '2', label: 'Test 2' }, score: 33 },
    ]}
  />
</div>;