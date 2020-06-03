import React, { useState } from 'react';

import {
  Panel,
  PanelContentHeader,
  PanelContentFooter,
  RadioPoll,
  TextAreaPoll,
  PollButtonGroup,
  ButtonGroupResults,
  PollResults,
  PollOption
} from '@react-poll-widget/ui';

export default {
  title: 'Examples|Poll examples'
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
          onChange={(e: React.FormEvent) => setText((e.target as HTMLTextAreaElement).value)}
          onSubmit={submit}
        />
    }
  </Panel>;
}

export const PollWithSingleChoiceQuestions = () => {
  const [choice1, setChoice1]: [
    PollOption | undefined,
    (arg: PollOption) => void
  ] = useState();
  const [choice2, setChoice2]: [
    PollOption | undefined,
    (arg: PollOption) => void
  ] = useState();

  const [step, setStep]: [
    number,
    (arg: number) => void
  ] = useState(0);

  const FirstQuestion = () => <>
    <PanelContentHeader>
      What is the best text editor?
    </PanelContentHeader>

    <RadioPoll
      options={[
        { id: 'emacs', label: 'Emacs', value: 'Emacs' },
        { id: 'nano', label: 'Nano', value: 'Nano' },
        { id: 'vim', label: 'Vim', value: 'Vim' }
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
        { id: 'nuclear', label: 'Nuclear', value: 'Nuclear' },
        { id: 'spotify', label: 'Spotify', value: 'Spotify' },
        { id: 'amarok', label: 'Amarok', value: 'Amarok' }
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
      onSubmit={() => alert(`Choices: ${choice1?.value}, ${choice2?.value}`)}
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

export const PollWithInstantResults = () => {
  const [showResults, setShowResults] = useState(false);
  const results = [
    { option: { id: 'vim', label: 'Vim', value: '1' }, score: 30 },
    { option: { id: 'emacs', label: 'Emacs', value: '2' }, score: 60 },
    { option: { id: 'sublime text', label: 'Sublime Text', value: '3' }, score: 10 }
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
        { id: 'vim', label: 'Vim', value: 'Vim' },
        { id: 'emacs', label: 'Emacs', value: 'Emacs' },
        { id: 'sublime text', label: 'Sublime Text', value: 'Sublime Text' }
      ]}
      onSelect={() => setShowResults(true)}
    />
  </>;

  return <Panel
    color='yellow'
    hasHeader
    hasFooter
    headerContent='Poll with instant results'
  >
    {
      showResults
        ? <Results />
        : <Question />
    }
  </Panel>;
}

export const PollWithInstantResultsAndButtonGroup = () => {
  const [showResults, setShowResults] = useState(false);

  const Results = () => <>
    <PanelContentHeader>
      Poll results:
    </PanelContentHeader>
    <ButtonGroupResults
      results={[
        { option: { id: 'yes', label: 'Yes', value: 'No' }, score: 64 },
        { option: { id: 'no', label: 'No' , value: 'No' }, score: 36 }
      ]}
    />
  </>;

  const Question = () => <>
    <PanelContentHeader>
      Are you wealthier than you were 5 years ago?
    </PanelContentHeader>

    <PollButtonGroup
      options={[
        { id: 'yes', label: 'Yes', value: 'No' },
        { id: 'no', label: 'No', value: 'No' }
      ]}
      selectOption={() => setShowResults(true)}
    />
  </>;

  return <Panel
    color='peach'
    hasHeader
    hasFooter
    headerContent='Poll with instant results and button groups'
  >
    {
      showResults
        ? <Results />
        : <Question />
    }
  </Panel>;
}

