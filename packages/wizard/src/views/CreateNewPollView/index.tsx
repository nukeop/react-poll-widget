import React from 'react';
import { CreateNewPoll } from '@react-poll-widget/ui';

import { PageWithSidebar } from '../../layouts/PageWithSidebar';

export const CreateNewPollView: React.FC = () => <PageWithSidebar>
  <CreateNewPoll
    onPollNameChange={() => { }}
    onCreate={() => { }}
  />
</PageWithSidebar>