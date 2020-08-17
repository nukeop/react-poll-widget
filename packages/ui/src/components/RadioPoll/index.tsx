import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import { PollOption, SelectOption } from '../types';
import Checkbox from '../Checkbox';
import './styles.scss';

const RadioPoll: React.FC<{
  options: PollOption[];
  selected?: PollOption | PollOption[];
  onSelect?: SelectOption;
  onSelectCustom?: () =>  void;
  onChange?: (e: React.ChangeEvent) => void;
  hasCustomOption?: boolean;
  customSelected?: boolean;
  loading?: boolean;
  multi?: boolean;
}> = ({
  options,
  selected,
  onSelect,
  onSelectCustom,
  onChange,
  hasCustomOption,
  customSelected,
  loading,
  multi
}) => (
      <Form loading={loading}>
        {
          options.map(option => (
            <Form.Field key={option.value}>
              <Checkbox
                type={multi ? 'checkbox' : 'radio'}
                label={option.label}
                checked={
                  selected !== undefined && 
                  (!Array.isArray(selected) && selected.value === option.value) ||
                  (Array.isArray(selected) && selected.includes(option))
                }
                onClick={() => onSelect && onSelect(option)}
              />
            </Form.Field>
          ))
        }
        {
          hasCustomOption &&
          <Form.Field>
          <Checkbox
            type={multi ? 'checkbox' : 'radio'}
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