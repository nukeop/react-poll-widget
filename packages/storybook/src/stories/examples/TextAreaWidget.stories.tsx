import React, { useState } from 'react';

import '@react-poll-widget/ui';
import { Button, Transition } from 'semantic-ui-react';

import {
  Panel,
  PanelContentHeader,
  TextAreaPoll
} from '@react-poll-widget/ui';

export default {
  title: 'Examples|Text area poll'
}

export const Construction = () => {
  const [isOpen, setOpen] = useState(false);
  return <div style={{ padding: '1rem' }}>
    <Button
      style={{ marginBottom: '2rem' }}
      icon={isOpen ? 'close' : 'add circle'}
      color='purple'
      size='large'
      onClick={() => setOpen(!isOpen)}
    />
    <Transition visible={isOpen} animation='fade down'>
      <Panel
        color='purple'
        hasHeader
        hasFooter
        headerContent='We value your feedback'
      >
        <PanelContentHeader>
          We're launching a new product line and considering customer input.
        </PanelContentHeader>
        <p>
        Which features of our product are currently the most useful to you?
        </p>
        <TextAreaPoll />
      </Panel>
    </Transition>
  </div>
}