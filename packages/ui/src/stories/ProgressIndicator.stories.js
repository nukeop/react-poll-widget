import React from 'react';

import { ProgressIndicator } from '..';

export default {
    title: 'Progress indicator'
};

export const Empty = () => <div style={{ 
  background: '#2c3e50',
  padding: '2rem'
  }}>
  <ProgressIndicator />
</div>

export const Half = () => <div style={{ 
  background: '#2c3e50',
  padding: '2rem'
  }}>
  <ProgressIndicator 
  step={1}
  stepsTotal={2}
  />
</div>