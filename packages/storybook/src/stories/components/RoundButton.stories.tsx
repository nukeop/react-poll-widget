import React, { useState } from 'react';
import { Icon, SemanticCOLORS } from 'semantic-ui-react';

import { RoundButton } from '@react-poll-widget/ui';

export default {
  title: 'Components/Round button'
}

export const Colors = () => <div style={{ margin: '2em 0 2em 2em' }}>
  {
    ([
      'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'peach', 'brown', 'grey', 'black'
    ] as SemanticCOLORS[]).map(color => <RoundButton
      onClick={() => alert('Button clicked')}
      color={color}
      Icon={<Icon name='chart bar' size='large' />}
    />)
  }

</div>;

export const WithCloseButton = () => <div style={{ margin: '2em 0 2em 2em' }}>
  <RoundButton
    withCloseButton
    onClick={() => alert('Button clicked')}
    onCloseClick={() => alert('Close clicked')}
    Icon={<Icon name='chart bar' size='large' />}
  />
</div>;

export const WithContent = () => <div style={{ margin: '2em 0 2em 2em' }}>
  <RoundButton
    Icon={<Icon name='question' size='large' />}
    text='Test test'
  />
</div>;

export const WithChangingIcon = () => {
  const [ icon, setIcon ]: [ 'close' | 'question', Function] = useState('question');

  return <div style={{ margin: '2em 0 2em 2em' }}>
  <RoundButton
    Icon={<Icon name={icon} size='large' />}
    onClick={() => icon==='question' ? setIcon('close') : setIcon('question')}
    text='Test test'
  />
</div>;
}