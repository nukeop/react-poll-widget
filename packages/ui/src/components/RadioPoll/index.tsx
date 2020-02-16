import React from 'react';
import { Form, Input, Radio } from 'semantic-ui-react';
import { compose, withHandlers, withState } from 'recompose';

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
  setCustomContent: (content: string) => void
}> = ({
  options,
  selected,
  selectOption,
  hasCustomOption,
  customSelected,
  selectCustom,
  customContent,
  setCustomContent
}) => (
      <Form>
        {
          options.map(option => (
            <Form.Field>
              <Radio
                label={option.label}
                value={option.value}
                checked={selected !== null && selected.value === option.value}
                onChange={() => selectOption(option)}
              />
            </Form.Field>
          ))
        }
        {
          hasCustomOption &&
          <Form.Field>
            <Radio
              label={
                <Input size='mini'
                  onChange={(e, data) => setCustomContent(e.target.value)}
                />
              }
              checked={customSelected}
              onChange={selectCustom}
            />
          </Form.Field>
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
  })
)(RadioPoll);