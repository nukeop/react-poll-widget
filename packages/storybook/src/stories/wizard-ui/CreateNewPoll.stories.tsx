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
    pollName={name}
    onPollNameChange={(e, { value }) => setName(value)}
    onCreate={() => alert(`Poll ${name} created.`)}
  />
}