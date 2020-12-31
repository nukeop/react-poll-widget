import React from "react";
import { Dropdown, DropdownItemProps, DropdownProps, Menu } from "semantic-ui-react";

import './styles.scss';

export type WizardSidebarProps = {
  selectedPollOptions: DropdownProps['options'];
  selectedPoll: DropdownProps['value'];
  onSelectedPollChange: DropdownProps['onChange'];
  onCreateNewPoll: DropdownItemProps['onClick'];
  GeneralLink?: React.FC;
  StepsLink?: React.FC;
};

const WizardSidebar: React.FC<WizardSidebarProps> = ({
  selectedPollOptions,
  selectedPoll,
  onSelectedPollChange,
  onCreateNewPoll,
  GeneralLink,
  StepsLink
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
    {
      selectedPoll &&
      <Menu.Item>
        <Dropdown
          className='poll-dropdown'
          selection
          options={pollDropdownOptions}
          value={selectedPoll}
          onChange={onSelectedPollChange}
        />
      </Menu.Item>
    }
    {
      GeneralLink &&
      <Menu.Item>
        <GeneralLink />
      </Menu.Item>
    }
    {
      StepsLink &&
      <Menu.Item>
        <StepsLink />
      </Menu.Item>
    }
  </Menu>
}

export default WizardSidebar;