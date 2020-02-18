import React from 'react';

import { RadioPoll } from '../..';

export default {
  title: 'Components/Radio poll'
};

export const Basic = () => <div>
  <RadioPoll
    options={[
      { label: 'Test 1', value: '1' },
      { label: 'Test 2', value: '2' },
      { label: 'Test 3', value: '3' }
    ]}
  />
</div>;

export const WithCustomOption = () => <div>
  <RadioPoll
    options={[
      { label: 'Test 1', value: '1' },
      { label: 'Test 2', value: '2' },
      { label: 'Test 3', value: '3' }
    ]}
    hasCustomOption
  />
</div>;