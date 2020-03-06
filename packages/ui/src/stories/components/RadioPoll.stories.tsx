import React, { useState } from 'react';

import { RadioPoll } from '../..';

export default {
  title: 'Components/Radio poll'
};

type Option = {label: string, value: string};
export const Basic = () => {
  const [option, select]: [
    Option | undefined,
    (arg: Option) => void
  ] = useState();
  return (
    <div>
      <RadioPoll
        options={[
          { label: 'Test 1', value: '1' },
          { label: 'Test 2', value: '2' },
          { label: 'Test 3', value: '3' }
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
          { label: 'Test 1', value: '1' },
          { label: 'Test 2', value: '2' },
          { label: 'Test 3', value: '3' }
        ]}
        loading
      />
    </div>
  );
}

export const WithCustomOption = () => {
  const [option, select]: [
    Option | undefined,
    (arg: Option | undefined) => void
   ] = useState();
  const [customSelected, selectCustom] = useState(false);
  return (
    <div>
      <RadioPoll
        options={[
          { label: 'Test 1', value: '1' },
          { label: 'Test 2', value: '2' },
          { label: 'Test 3', value: '3' }
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