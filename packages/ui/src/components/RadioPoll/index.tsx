import React from 'react';
import { Form, Input, Radio } from 'semantic-ui-react';
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
  onInputChange: (e: React.ChangeEvent) => void
}> = ({
  options,
  selected,
  selectOption,
  hasCustomOption,
  customSelected,
  selectCustom,
  customContent,
  setCustomContent,
  onInputChange
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
    selectCustom: ({ setSelected, setCustomSelected }) => () => {
      setCustomSelected(true);
      setSelected(null);
    },
    selectOption: ({ setSelected, setCustomSelected }) => (option) => {
      setSelected(option);
      setCustomSelected(false);
    },
    onInputChange: ({ setCustomContent }) => (e) => setCustomContent(e.target.value)
  })
)(RadioPoll);