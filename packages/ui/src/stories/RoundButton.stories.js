import React from 'react';
import { Icon } from 'semantic-ui-react';

import { RoundButton } from '..';

export default {
  title: 'RoundButton'
}

export const Colors = () => <div style={{margin: '2em 0 2em 2em'}}>
  {
    [
      'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'
    ].map(color =>  <RoundButton
      onClick={() => alert('Button clicked')}
      color={color}
    >
    <Icon name='chart bar' size='large' />
  </RoundButton> )
  }
 
</div>;

export const WithCloseButton = () => <div style={{margin: '2em 0 2em 2em'}}>
<RoundButton
  withCloseButton
  onClick={() => alert('Button clicked')}
  onCloseClick={() => alert('Close clicked')}
>
<Icon name='chart bar' size='large' />
</RoundButton> 
</div>;