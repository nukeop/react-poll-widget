import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import { PollWidget, PollType } from '@react-poll-widget/widget';

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
      onSubmit={results => alert(JSON.stringify(results))}
      steps={[
        {
          title: 'First step',
          header: 'This is a single choice (radio) poll',
          description: <p>Description of the first step</p>,
          type: 'single' as PollType,
          options: [
            { id: '1', label: 'First option', value: '1' }, 
            { id: '2', label: 'Second option', value: '2' }, 
            { id: '3', label: 'Third option', value: '3' }
          ]
        },
        {
          title: 'Second step',
          header: 'This is a multiple choice poll',
          description: <p>Description of the second step</p>,
          type: 'multi' as PollType,
          options: [
            { id: '1', label: 'Option 1', value: '1' }, 
            { id: '2', label: 'Option 2', value: '2' }, 
            { id: '3', label: 'Option 3', value: '3' }
          ]
        },
        {
          title: 'Third step',
          header: 'This is the third step. You can pick only one option',
          description: <><h4>Now there's a header.</h4><p>Description of the second step</p></>,
          type: 'button' as PollType,
          options: [
            { id: '1', label: 'Option 1', value: 'Option 1' }, 
            { id: '2', label: 'Option 2', value: 'Option 2' }, 
            { id: '3', label: 'Option 3', value: 'Option 3' }
          ]
        },
      ]}
    />
  </div>
}