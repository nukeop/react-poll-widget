import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import { ProgressIndicator } from '@react-poll-widget/ui';

export default {
  title: 'Components|Progress indicator'
};

export const Empty = () => <div style={{
  background: '#2c3e50',
  padding: '2rem'
}}>
  <ProgressIndicator />
</div>;

export const Half = () => <div style={{
  background: '#2c3e50',
  padding: '2rem'
}}>
  <ProgressIndicator
    step={1}
    stepsTotal={2}
  />
</div>;

export const WithButtons = () => {
  const stepsTotal = 5;
  const [step, setStep] = useState(0);
  const increment = () => setStep(Math.min(step + 1, stepsTotal));
  const decrement = () => setStep(Math.max(step - 1, 0));
  
  return <div style={{
    background: '#2c3e50',
    padding: '2rem'
  }}>
    <ProgressIndicator
      step={step}
      stepsTotal={stepsTotal}
    />
    <Button.Group style={{ marginTop: '2rem' }}>
      <Button disabled={step===0} onClick={decrement}>Previous</Button>
      <Button color='blue'>{step}/{stepsTotal}</Button>
      <Button disabled={step===stepsTotal} onClick={increment}>Next</Button>
    </Button.Group>
  </div>;
}