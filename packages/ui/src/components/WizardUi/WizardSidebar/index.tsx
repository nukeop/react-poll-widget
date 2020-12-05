import React from "react";
import { Divider, Dropdown, DropdownItemProps, DropdownProps, Menu } from "semantic-ui-react";

import './styles.scss';

export type WizardSidebarProps = {
  selectedPollOptions: DropdownProps['options'];
  selectedPoll: DropdownProps['value'];
  onSelectedPollChange: DropdownProps['onChange'];
  onCreateNewPoll: DropdownItemProps['onClick'];
};

const WizardSidebar: React.FC<WizardSidebarProps> = ({
  selectedPollOptions,
  selectedPoll,
  onSelectedPollChange,
  onCreateNewPoll
}) => {
  const pollDropdownOptions = [
    ...(selectedPollOptions || []),
    {
      text: 'Create a new poll',
      icon: 'plus',
      onClick: onCreateNewPoll
    }
  ]


  return <Menu 
  vertical 
  inverted
  className='wizard-sidebar'
  >
    <Menu.Item>
      <Dropdown
        className='poll-dropdown'
        selection
        options={pollDropdownOptions}
        value={selectedPoll}
        onChange={onSelectedPollChange}
      />
    </Menu.Item>
    <Menu.Item>
      General
    </Menu.Item>
    <Menu.Item>
      Steps
    </Menu.Item>
  </Menu>
}

export default WizardSidebar;