import React, { useState } from 'react';
import _ from 'lodash';
import { Button, Form, Input } from 'semantic-ui-react';

import { Checkbox } from '..';

export default {
  title: 'Components/Checkbox'
};

export const SquareCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return <div style={{ padding: '2em' }}>
    <Checkbox checked={checked} onClick={() => setChecked(!checked)} label='Test' />
  </div>;
};

export const Radio = () => {
  const [checked, setChecked] = useState(false);
  return <div style={{ padding: '2em' }}>
    <Checkbox
      type='radio'
      checked={checked}
      onClick={() => setChecked(!checked)}
      label='Test'
    />
  </div>;
};


export const InputAsLabel = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('');

  return <div style={{ padding: '2em' }}>
    <Checkbox
      type='radio'
      checked={checked}
      onClick={() => setChecked(!checked)}
      label={<Input size='small' onChange={e => setText(e.target.value)} />}
    />
    <Button onClick={() => alert(`Entered text: ${text}`)}>Test</Button>
  </div>;
};

export const RadioGroup = () => {
  const [selected, setSelected] = useState(null);
  const options = [
    { label: 'Test 1', value: 1 },
    { label: 'Test 2', value: 2 },
    { label: 'Test 3', value: 3 },
    { label: 'Test 4', value: 4 }
  ];

  return <div style={{ padding: '2em' }}>
    <Form>
      {
        options.map(option => (
          <Form.Field>
            <Checkbox
              type='radio'
              label={option.label}
              checked={selected === option.value}
              onClick={() => setSelected(option.value)}
            />
          </Form.Field>
        ))
      }
    </Form>
  </div>;
}

export const CheckboxGroup = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { label: 'Test 1', value: 1 },
    { label: 'Test 2', value: 2 },
    { label: 'Test 3', value: 3 },
    { label: 'Test 4', value: 4 }
  ];

  const addValue = val => setSelected(_.union(selected, [val]));
  const removeValue = val => setSelected(_.without(selected, val));
  const hasValue = val => _.includes(selected, val);
  const toggleValue = val => hasValue(val) ? removeValue(val) : addValue(val);

  return <div style={{ padding: '2em' }}>
    <Form>
      {
        options.map(option => (
          <Form.Field>
            <Checkbox
              label={option.label}
              checked={hasValue(option.value)}
              onClick={() => toggleValue(option.value)}
            />
          </Form.Field>
        ))
      }
    </Form>
  </div>;
}