import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { compose, withHandlers, withState } from 'recompose';

import Checkbox from '../Checkbox';
import './styles.scss';

type RadioPollOption = {
  label: string;
  value: string;
};

const RadioPoll: React.FC<{
  options: RadioPollOption[],
  selected: RadioPollOption | null,
  selectOption: (option: RadioPollOption) => void,
  hasCustomOption: boolean,
  customSelected: boolean,
  selectCustom: () => void,
  customContent: string,
  setCustomContent: (content: string) => void,
  onInputChange: (e: React.ChangeEvent) => void,

  // Passed from the outside
  onSelect: (option: RadioPollOption) => void,
  onChange: (e: React.ChangeEvent) => void
}> = ({
  options,
  selected,
  selectOption,
  hasCustomOption,
  customSelected,
  selectCustom,
  customContent,
  onInputChange,
  onSelect
}) => (
      <Form>
        {
          options.map(option => (
            <Form.Field>
              <Checkbox
                type='radio'
                label={option.label}
                checked={selected !== null && selected.value === option.value}
                onClick={() => selectOption(option)}
              />
            </Form.Field>
          ))
        }
        {
          hasCustomOption &&
          <Checkbox
            type='radio'
            label={
              <Input size='small' onChange={onInputChange} />
            }
            checked={customSelected}
            onClick={selectCustom}
          />
        }
      </Form>
    )

export default compose(
  withState('selected', 'setSelected', null),
  withState('customSelected', 'setCustomSelected', false),
  withState('customContent', 'setCustomContent', ''),
  withHandlers({
    selectCustom: ({ setSelected, setCustomSelected, customContent, onSelect }) => () => {
      setCustomSelected(true);
      setSelected(null);
      onSelect(customContent);
    },
    selectOption: ({ selected, setSelected, setCustomSelected, onSelect }) => (option) => {
      setSelected(option);
      setCustomSelected(false);
      onSelect(option);
    },
    onInputChange: ({ onChange, setCustomContent }) => (e) => {
      setCustomContent(e.target.value);
      onChange(e.target.value);
    }
  })
)(RadioPoll);