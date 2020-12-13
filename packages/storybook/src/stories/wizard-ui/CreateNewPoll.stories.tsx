import React, { useState } from 'react';

import {
  CreateNewPoll
} from '@react-poll-widget/ui';

export default {
  title: 'Wizard UI/Forms/Create a new poll'
}

export const CreateNewPollStory = () => {
  const [name, setName] = useState('');
  return <CreateNewPoll
    fieldsProps={{
      name: {
        name: 'name',
        label: 'Poll name',
        placeholder: 'Enter poll name',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
        onBlur: () => { },
        value: name,
        error: false
      }
    }}
    isSubmitting={false}
    onSubmit={() => alert(`Poll ${name} created.`)}
  />
}