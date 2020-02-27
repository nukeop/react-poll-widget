import React, { useState } from 'react';
import { Icon, Transition } from 'semantic-ui-react';

import {
  RoundButton,
  Panel,
  PanelContentHeader,
  PanelContentFooter,
  TextAreaPoll
} from '../..';
import './FullExamples.scss';

export default {
  title: 'Compositions/Full widget examples'
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
            color='blue'
            hasHeader
            hasFooter
            headerContent='Open source project feedback'
          >
            <PanelContentHeader>
              What area should we focus on in the next release?
        </PanelContentHeader>
            {
              submitted
                ? <Submitted />
                : <TextAreaPoll
                  loading={loading}
                  onSubmit={submit}
                />
            }
          </Panel>
        </Transition>
        <RoundButton
          withCloseButton
          onClick={() => {
            icon === 'question' ? setIcon('close') : setIcon('question');
            setOpen(!isOpen);
          }}
          onCloseClick={() => setButtonVisible(false)}
          Icon={<Icon name={icon} size='large' />}
          color='blue'
        />
      </>
    }
  </div>;
}