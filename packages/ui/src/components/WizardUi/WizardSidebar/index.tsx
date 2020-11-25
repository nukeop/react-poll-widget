import React from "react";
import { Divider, Dropdown, DropdownProps, Menu } from "semantic-ui-react";

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
        selection
        options={selectedPollOptions}
        value={selectedPoll}
        onChange={onSelectedPollChange}
      />
    </Menu.Item>
    <Divider />
  </Menu>

export default WizardSidebar;