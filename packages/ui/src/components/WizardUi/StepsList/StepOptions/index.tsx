import React from 'react'
import { Button, Form, Icon, Input } from 'semantic-ui-react';
import { StepsListProps } from '..';

import { PollOption } from '../../../types'
import WizardPanel from '../../WizardPanel'
import { StepDetailsProps } from '../StepDetails';

import './styles.scss';

export type StepOptionsProps = Pick<StepDetailsProps, 'onChangeOption' | 'onDeleteOption'> & {
  options: PollOption[];
  onAddOption: React.MouseEventHandler;
}

export type OptionFieldProps = {
  option: PollOption;
  onChange: React.ChangeEventHandler;
  onDelete: React.MouseEventHandler;
}

const OptionField: React.FC<OptionFieldProps> = ({
  option,
  onChange,
  onDelete
}) => <span className='option-field'>
    <Input
      onChange={onChange}
      value={option.label}
    />
    <Button
      className='delete-button'
      color='red'
      icon
      onClick={onDelete}
    >
      <Icon name='times' />
    </Button>
  </span>

export const StepOptions: React.FC<StepOptionsProps> = ({
  options,
  onChangeOption,
  onDeleteOption,
  onAddOption
}) => <WizardPanel className='step-options'>
    {
      options.map((option, i) => <Form.Field
        label={`Option #${i + 1}`}
        control={OptionField}
        option={option}
        onChange={(e, { value }) => onChangeOption(option.id, value)}
        onDelete={() => onDeleteOption(option.id)}
      />)
    }
    <Form.Button onClick={onAddOption}>Add option</Form.Button>
  </WizardPanel>