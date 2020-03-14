import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import { PollWidget } from '@react-poll-widget/widget';

export default {
  title: 'Widgets|Poll Widget'
}

export const PopupPoll = () => {
  const [icon, setIcon] = useState('question');

  return <div style={{ margin: '2rem' }}>
    <PollWidget 
      trigger={<Button icon={icon} />}
      color='blue'
      onOpen={() => setIcon('close')}
      onClose={() => setIcon('question')}
      steps={[
        {
          title: 'First step',
          header: 'This is the first step',
          description: <p>Description of the first step</p>,
          type: 'single',
          options: [
            { label: 'First option', value: '1' }, 
            { label: 'Second option', value: '2' }, 
            { label: 'Third option', value: '3' }
          ]
        },
        {
          title: 'Second step',
          header: 'This is the second step',
          description: <p>Description of the second step</p>,
          type: 'multi',
          options: [
            { label: 'Option 1', value: '1' }, 
            { label: 'Option 2', value: '2' }, 
            { label: 'Option 3', value: '3' }
          ]
        },
        {
          title: 'Third step',
          header: 'This is the third step',
          description: <><h4>Now there's a header.</h4><p>Description of the second step</p></>,
          type: 'button',
          options: [
            { content: 'Option 1', onClick: () => {} }, 
            { content: 'Option 2', onClick: () => {} }, 
            { content: 'Option 3', onClick: () => {} }
          ]
        },
      ]}
    />
  </div>
}