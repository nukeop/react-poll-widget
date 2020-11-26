import React from "react";
import { Divider, Dropdown, DropdownProps, Menu } from "semantic-ui-react";

import './styles.scss';

export type WizardSidebarProps = {
  selectedPollOptions: DropdownProps['options'];
  selectedPoll: DropdownProps['value'];
  onSelectedPollChange: DropdownProps['onChange'];
};

const WizardSidebar: React.FC<WizardSidebarProps> = ({
  selectedPollOptions,
  selectedPoll,
  onSelectedPollChange
}) => <Menu vertical inverted>
    <Menu.Item>
      <Dropdown
      className='poll-dropdown'
        selection
        options={selectedPollOptions}
        value={selectedPoll}
        onChange={onSelectedPollChange}
      />
    </Menu.Item>
    <Menu.Item>
      test
    </Menu.Item>
  </Menu>

export default WizardSidebar;