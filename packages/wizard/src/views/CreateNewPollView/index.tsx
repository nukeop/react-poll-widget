import React, { useEffect } from 'react';
import { CreateNewPoll } from '@react-poll-widget/ui';

import { PageWithSidebar } from '../../layouts/PageWithSidebar';
import { findAllPolls } from '../../api/polls';

export const CreateNewPollView: React.FC = () => {
useEffect(() => {
  findAllPolls();
})
return <PageWithSidebar>
  <CreateNewPoll
    onPollNameChange={() => { }}
    onCreate={() => { }}
  />
</PageWithSidebar>
}