import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import { PollOption } from '../types';
import Checkbox from '../Checkbox';
import './styles.scss';

const RadioPoll: React.FC<{
  options: PollOption[];
  selected?: PollOption;
  onSelect?: (option: PollOption) => void;
  onSelectCustom?: () =>  void;
  onChange?: (e: React.ChangeEvent) => void;
  hasCustomOption?: boolean;
  customSelected?: boolean;
  loading?: boolean;
}> = ({
  options,
  selected,
  onSelect,
  onSelectCustom,
  onChange,
  hasCustomOption,
  customSelected,
  loading
}) => (
      <Form loading={loading}>
        {
          options.map(option => (
            <Form.Field>
              <Checkbox
                type='radio'
                label={option.label}
                checked={selected !== undefined && selected.value === option.value}
                onClick={() => onSelect && onSelect(option)}
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