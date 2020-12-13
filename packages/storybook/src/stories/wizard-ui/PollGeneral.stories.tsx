import React from 'react';

import {
  PollGeneral
} from '@react-poll-widget/ui';

export default {
  title: 'Wizard UI/Forms/Poll general settings'
}

export const PollGeneralStory = () => {
  return <PollGeneral 
  poll={{
    id: 'poll-id',
    name: 'Story poll'
  }}
  fieldsProps={{
    name: {
      name: 'name',
      label: 'Poll name',
      value: 'Story poll',
      placeholder: 'Enter new poll name',
      error: false,
      onChange: () => {},
      onBlur: () => {}
    }
  }}
  />;
}