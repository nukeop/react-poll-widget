import React, { useState } from 'react'

import '../..';
import all, { Button, Icon, Transition } from 'semantic-ui-react'

import {
  RoundButton,
  Panel,
  PanelContentHeader,
  TextAreaPoll
} from '@react-poll-widget/ui'

export default {
  title: 'Text area widget'
}

export const TextAreaWidget = () => {
  const [isOpen, setOpen] = useState(false);
  return <div>
    <Button
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
      >
        <PanelContentHeader>
          Test
        </PanelContentHeader>
        <TextAreaPoll />
      </Panel>
    </Transition>
  </div>
}