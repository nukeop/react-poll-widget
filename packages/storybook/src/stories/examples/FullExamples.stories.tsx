import React, { useState } from 'react';
import { Icon, Transition } from 'semantic-ui-react';

import {
  RoundButton,
  Panel,
  PanelContentHeader,
  PollResults
} from '@react-poll-widget/ui';
import './FullExamples.scss';

export default {
  title: 'Examples|Full widget examples'
}

export const FullWidget = () => {
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [icon, setIcon] = useState('question');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  }
  const Submitted = () => <span>
    <strong>Thank you for participating in the poll!</strong>
  </span>;
  return <div style={{
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '2rem',
    width: '100%',
    height: '100%'
  }}>
    {
      isButtonVisible &&
      <>
        <Transition visible={isOpen} animation='fade up'>
          <Panel
            className='offset-panel'
            color='purple'
            hasHeader
            hasFooter
            headerContent='Open source project feedback'
          >
           <PanelContentHeader>
      Poll results:
    </PanelContentHeader>
    <PollResults
      results={[
        { id: 'vim', label: 'Vim', score: 30 },
        { id: 'emacs', label: 'Emacs', score: 60 },
        { id: 'sublime text', label: 'Sublime Text', score: 10 }
      ]}
    />
          </Panel>
        </Transition>
        <RoundButton
          withCloseButton
          onClick={() => {
            icon === 'question' ? setIcon('close') : setIcon('question');
            setOpen(!isOpen);
          }}
          onCloseClick={() => setButtonVisible(false)}
          Icon={<Icon name={icon as 'question' | 'close'} size='large' />}
          color='purple'
        />
      </>
    }
  </div>;
}