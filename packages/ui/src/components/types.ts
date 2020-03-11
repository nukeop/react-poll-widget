export type PollResult = {
  label: string;
  score: number;
};

export type PanelColor =  'blue' | 'teal' | 'pink' | 'yellow' | 'green' | 'purple' | 'orange' | 'red' | 'rose' | 'peach' | 'gray' | 'black';

export type RadioPollOption = {
  label: string;
  value: string;
};

export type PollButton = {
  content: React.ReactNode;
  onClick?: () => void;
};