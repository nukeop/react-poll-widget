import React from 'react';
import { CreateNewPoll } from '@react-poll-widget/ui';

import { PageWithSidebar } from '../../layouts/PageWithSidebar';
import { Loadable } from '../../store/types';
import { Poll } from '../../models/polls';

export type CreateNewPollViewComponentProps = {
  polls: Loadable<{[k: string]: Poll}>;
}

export const CreateNewPollViewComponent: React.FC<CreateNewPollViewComponentProps> = ({
  polls
}) => {
  console.log(polls)
return <PageWithSidebar>
  <CreateNewPoll
    onPollNameChange={() => { }}
    onCreate={() => { }}
  />
</PageWithSidebar>
}