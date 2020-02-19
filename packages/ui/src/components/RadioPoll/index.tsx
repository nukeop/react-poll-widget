import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import Checkbox from '../Checkbox';
import './styles.scss';

type RadioPollOption = {
  label: string;
  value: string;
};

const RadioPoll: React.FC<{
  options: RadioPollOption[],
  selected?: RadioPollOption,
  onSelect: (option: RadioPollOption) => void,
  onSelectCustom: () =>  void,
  onChange: (e: React.ChangeEvent) => void,
  hasCustomOption: boolean,
  customSelected: boolean
}> = ({
  options,
  selected,
  onSelect,
  onSelectCustom,
  onChange,
  hasCustomOption,
  customSelected
}) => (
      <Form>
        {
          options.map(option => (
            <Form.Field>
              <Checkbox
                type='radio'
                label={option.label}
                checked={selected !== undefined && selected.value === option.value}
                onClick={() => onSelect(option)}
              />
            </Form.Field>
          ))
        }
        {
          hasCustomOption &&
          <Form.Field>
          <Checkbox
            type='radio'
            label={
              <Input size='small' onChange={onChange} />
            }
            checked={customSelected}
            onClick={onSelectCustom}
          />
          </Form.Field>
        }
      </Form>
    )

export default RadioPoll;