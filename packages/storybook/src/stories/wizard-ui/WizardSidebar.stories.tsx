import React, { useState } from 'react';

import {
  WizardSidebar
} from '@react-poll-widget/ui';
import { DropdownProps } from 'semantic-ui-react';

export default {
  title: 'Wizard UI|Wizard Sidebar'
}

export const WizardSidebarDemo = () => {
let [selectedPoll, setSelectedPoll] = useState<DropdownProps['value']>('Poll 1');

  return <WizardSidebar
    selectedPollOptions={[{
      text: 'Poll 1'
    },
    {
      text: 'Poll 2'
    }]}
    selectedPoll={selectedPoll}
    onSelectedPollChange={(e, { value }) => setSelectedPoll(value)}
  />
}