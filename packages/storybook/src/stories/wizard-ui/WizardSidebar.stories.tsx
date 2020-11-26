import React, { useState } from 'react';

import {
  WizardSidebar
} from '@react-poll-widget/ui';
import { DropdownProps } from 'semantic-ui-react';

export default {
  title: 'Wizard UI|Wizard Sidebar'
}

export const WizardSidebarDemo = () => {
let [selectedPoll, setSelectedPoll] = useState<DropdownProps['value']>('1');
console.log({selectedPoll})
  return <WizardSidebar
    selectedPollOptions={[{
      key: '1',
      text: 'Poll 1',
      value: '1'
    },
    {
      key: '2',
      text: 'Poll 2',
      value: '2'
    }]}
    selectedPoll={selectedPoll}
    onSelectedPollChange={(e, { value }) => setSelectedPoll(value)}
  />
}