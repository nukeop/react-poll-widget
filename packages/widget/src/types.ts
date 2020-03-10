import React from 'react';

export type PollType = 'single' | 'button' | 'multi' | 'text';

export type PollOption = {
  text: string
};

export type PollStep = {
  title: string;
  description: React.ReactNode;
  type: PollType;
  options?: PollOption[];
};