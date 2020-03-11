import React from 'react';

import { RadioPollOption, PollButton } from '@react-poll-widget/ui';
import { Button } from 'semantic-ui-react';

export type PollType = 'single' | 'button' | 'multi' | 'text';

export type PollStep = {
  title: string;
  header: string;
  description: React.ReactNode;
  type: PollType;
  options?: (RadioPollOption | PollButton)[];
};