export type PollResult = {
  id: string;
  label: string;
  score: number;
};

export type PanelColor =  'blue' | 'teal' | 'pink' | 'yellow' | 'green' | 'purple' | 'orange' | 'red' | 'rose' | 'peach' | 'gray' | 'black';

export type RadioPollOption = {
  id: string;
  label: string;
  value: string;
};

export type PollButton = {
  id: string;
  content: React.ReactNode;
  onClick?: () => void;
};