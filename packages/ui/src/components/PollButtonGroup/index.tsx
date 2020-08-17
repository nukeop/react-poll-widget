import React from 'react';
import { Button } from 'semantic-ui-react';

import { PollOption, SelectOption } from '../types';
import './styles.scss';

const PollButtonGroup: React.FC<{
  options: PollOption[],
  selected?: PollOption;
  onSelect: SelectOption,
  icons?: boolean,
  loading?: boolean
}> = ({
  options,
  selected,
  onSelect,
  icons = false,
  loading = false
}) => <Button.Group
  fluid
  icon={icons}
  className='poll-button-group'
  loading={loading}
>
      {
        options.map(option => {
          const handleClick = () => onSelect(option);
          return (
            <Button
              key={option.value}
              onClick={handleClick}
              active={selected?.value === option.value}
            >
              {option.label}
            </Button>
          )
        })
      }
    </Button.Group>


export default PollButtonGroup