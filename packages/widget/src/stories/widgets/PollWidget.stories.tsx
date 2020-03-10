import React from 'react';
import { Button } from 'semantic-ui-react';

import { PollWidget } from '../..';

export default {
  title: 'Widgets/Poll widget'
}

export const PopupPoll = () => {

  return <div style={{ margin: '2rem' }}>
    <PollWidget 
      trigger={<Button icon='question' />}
      steps={[
        {
          title: 'First step',
          description: 'Description of the first step',
          type: 'single'
        }
      ]}
    />
  </div>
}