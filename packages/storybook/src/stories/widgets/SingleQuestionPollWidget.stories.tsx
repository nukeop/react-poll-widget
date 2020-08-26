import React, { useState } from 'react';
import { Icon, SemanticICONS, Message } from 'semantic-ui-react';

import { SingleQuestionPollWidget, PollType } from '@react-poll-widget/widget';
import { RoundButton } from '@react-poll-widget/ui';

export default {
  title: 'Widgets|Single question poll widget'
}

export const PopupPoll = () => {
  const [icon, setIcon] = useState<SemanticICONS>('question');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return <div style={{ margin: '2rem' }}>
    <SingleQuestionPollWidget
      trigger={<RoundButton
        color='red'
        Icon={<Icon name={icon} size='large' />}
      />}
      color='peach'
      loading={submitting}
      onOpen={() => setIcon('close')}
      onClose={() => setIcon('question')}
      onSubmit={() => {
        setSubmitting(true)
        setTimeout(() => {
          setSubmitting(false)
          setSubmitted(true)
        }, 1000)
      }}
      step={{
        title: 'Single question poll',
        header: 'This is a single choice (radio) poll',
        description: <p>Description of the poll</p>,
        type: 'single' as PollType,
        options: [
          { id: '1', label: 'First option', value: '1' },
          { id: '2', label: 'Second option', value: '2' },
          { id: '3', label: 'Third option', value: '3' }
        ]
      }}
      success={submitted}
      SuccessComponent={<Message positive>
        Thanks for participating!
        </Message>}
    />
  </div>;
}