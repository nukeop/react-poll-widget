import React, { useState } from 'react';

import {
  Panel,
  PanelContentHeader,
  PanelContentFooter,
  RadioPoll,
  TextAreaPoll
} from '../..';

export default {
  title: 'Compositions/Poll examples'
}

export const PollWithTextArea = () => {
  const [text, setText] = useState('');
  return <Panel
    color='purple'
    hasHeader
    hasFooter
    headerContent='Poll with text area'
  >
    <PanelContentHeader>
      Submit questions for our next AMA session.
    </PanelContentHeader>
    <p>
      The best fan questions will be included in our show.
    </p>
    <TextAreaPoll
      onChange={e => setText(e.target.value)}
      onSubmit={() => alert(`Submitted text: ${text}`)}
    />
  </Panel>;
}

export const PollWithSingleChoiceQuestions = () => {
  const [choice1, setChoice1] = useState();
  const [choice2, setChoice2] = useState();

  const [step, setStep] = useState(0);

  const FirstQuestion = () => <>
    <PanelContentHeader>
      What is the best text editor?
    </PanelContentHeader>

    <RadioPoll
      options={[
        { label: 'Emacs', value: 'Emacs' },
        { label: 'Nano', value: 'Nano' },
        { label: 'Vim', value: 'Vim' }
      ]}
      selected={choice1}
      onSelect={setChoice1}
    />

    <PanelContentFooter onNext={() => setStep(1)} />
  </>;

  const SecondQuestion = () => <>
    <PanelContentHeader>
      What is the best music player?
    </PanelContentHeader>

    <RadioPoll
      options={[
        { label: 'Nuclear', value: 'Nuclear' },
        { label: 'Spotify', value: 'Spotify' },
        { label: 'Amarok', value: 'Amarok' }
      ]}
      selected={choice2}
      onSelect={setChoice2}
    />

    <PanelContentFooter 
    hasNext={false} 
    hasBack
    hasSubmit

    onBack={() => setStep(0)}
    onSubmit={() => alert(`Choices: ${choice1.value}, ${choice2.value}`)}
    />
  </>;

  return <Panel
    color='blue'
    hasHeader
    hasFooter
    headerContent='Poll with single choice questions'
  >
    {
      step === 0 && <FirstQuestion />
    }
    {
      step === 1 && <SecondQuestion />
    }
  </Panel>;
}