export type PanelColor = 'blue' | 'teal' | 'pink' | 'yellow' | 'green' | 'purple' | 'orange' | 'red' | 'rose' | 'peach' | 'gray' | 'black';

export enum StepType {
  SINGLE = 'single',
  BUTTON = 'button',
  MULTI = 'multi',
  TEXT = 'text'
}

export type PollStep = {
  id: string;
  title: string;
  header: string;
  description: string;
  type: StepType;
  options: PollOption[];
}

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