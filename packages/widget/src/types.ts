import React from 'react';

import { PollOption } from '@react-poll-widget/ui';

export type PollType = 'single' | 'button' | 'multi' | 'text';

export type PollStep = {
  title: string;
  header: string;
  description: React.ReactNode;
  type: PollType;
  options: PollOption[];
};