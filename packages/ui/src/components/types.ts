export type PanelColor =  'blue' | 'teal' | 'pink' | 'yellow' | 'green' | 'purple' | 'orange' | 'red' | 'rose' | 'peach' | 'gray' | 'black';

export type PollOption = {
  id: string;
  label: string;
  value: string;
};

export type PollResult = {
  option: PollOption;
  score: number;
};

export type SelectOption = (option: PollOption) => void;