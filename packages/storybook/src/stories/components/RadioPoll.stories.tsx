import React, { useState } from 'react';

import { RadioPoll, PollOption } from '@react-poll-widget/ui';

export default {
  title: 'Components/Radio poll'
};

export const Basic = () => {
  const [option, select]: [
    PollOption | undefined,
    (arg: PollOption) => void
  ] = useState();
  return (
    <div>
      <RadioPoll
        options={[
          { id:'1', label: 'Test 1', value: '1' },
          { id:'2', label: 'Test 2', value: '2' },
          { id:'3', label: 'Test 3', value: '3' }
        ]}
        selected={option}
        onSelect={select}
      />
    </div>
  );
}

export const Loading = () => {
  return (
    <div>
      <RadioPoll
        options={[
          { id:'1', label: 'Test 1', value: '1' },
          { id:'2', label: 'Test 2', value: '2' },
          { id:'3', label: 'Test 3', value: '3' }
        ]}
        loading
      />
    </div>
  );
}

export const WithCustomOption = () => {
  const [option, select]: [
    PollOption | undefined,
    (arg: PollOption | undefined) => void
   ] = useState();
  const [customSelected, selectCustom] = useState(false);
  return (
    <div>
      <RadioPoll
        options={[
          { id:'1', label: 'Test 1', value: '1' },
          { id:'2', label: 'Test 2', value: '2' },
          { id:'3', label: 'Test 3', value: '3' }
        ]}
        selected={option}
        onSelect={option => {
          select(option);
          selectCustom(false);
        }}
        hasCustomOption
        customSelected={customSelected}
        onSelectCustom={() => {
          selectCustom(true)
          select(undefined);
        }}
      />
    </div>
  );
}