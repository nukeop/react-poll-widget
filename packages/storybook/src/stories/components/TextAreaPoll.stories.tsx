import React from 'react';

import { TextAreaPoll } from '@react-poll-widget/ui';

export default {
  title: 'Components/Text area poll'
};

export const Basic = () => <div style={{padding: '2em'}}>
  <TextAreaPoll />
</div>;

export const Loading = () => <div style={{padding: '2em'}}>
  <TextAreaPoll loading/>
</div>;

export const Error = () => <div style={{padding: '2em'}}>
  <TextAreaPoll error='This field is required'/>
</div>;