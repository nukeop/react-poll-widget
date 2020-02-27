import React, { useState } from 'react';

import {
  Panel,
  PanelContentHeader,
  PanelContentFooter,
  RadioPoll,
  TextAreaPoll,
  PollResults
} from '../..';

export default {
  title: 'Compositions/Poll examples'
}

export const PollWithTextArea = () => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const Submitted = () => <strong>Thanks for participating!</strong>;

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

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
    {
      submitted
        ? <Submitted />
        : <TextAreaPoll
          loading={loading}
          onChange={e => setText(e.target.value)}
          onSubmit={submit}
        />
    }
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
      submitDisabled={choice1 === null || choice2 === null}

      onBack={() => setStep(0)}
      onSubmit={() => alert(`Choices: ${choice1.value}, ${choice2.value}`)}
    />
  </>;

  return <Panel
    color='blue'
    hasHeader
    hasFooter
    hasSteps
    headerContent='Poll with single choice questions'
    step={step}
    stepsTotal={1}
  >
    {
      step === 0 && <FirstQuestion />
    }
    {
      step === 1 && <SecondQuestion />
    }
  </Panel>;
}

export const PollWithImmediateResults = () => {
  const [showResults, setShowResults] = useState(false);
  const results = [
    { label: 'Vim', score: 30 },
    { label: 'Emacs', score: 60 },
    { label: 'Sublime Text', score: 10 }
  ];

  const Results = () => <>
    <PanelContentHeader>
      Poll results:
    </PanelContentHeader>
    <PollResults
      results={results}
    />
  </>;

  const Question = () => <>
    <PanelContentHeader>
      What is the best text editor?
    </PanelContentHeader>

    <RadioPoll
      options={[
        { label: 'Vim', value: 'Vim' },
        { label: 'Emacs', value: 'Emacs' },
        { label: 'Sublime Text', value: 'Sublime Text' }
      ]}
      onSelect={setShowResults}
    />
  </>;

  return <Panel
    color='yellow'
    hasHeader
    hasFooter
    headerContent='Poll with immediate results'
  >
    {
      showResults
        ? <Results />
        : <Question />
    }
  </Panel>;
}