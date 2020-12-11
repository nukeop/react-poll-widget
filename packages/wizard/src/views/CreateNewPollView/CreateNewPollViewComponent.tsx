import React from 'react';
import { CreateNewPoll } from '@react-poll-widget/ui';

import { CreateNewPollViewProps } from './CreateNewPollViewContainer';
import { PageWithSidebar } from '../../layouts/PageWithSidebar';
import { Loadable } from '../../store/types';
import { Poll } from '../../models/polls';

export type CreateNewPollViewComponentProps = CreateNewPollViewProps & {
  polls: Loadable<{ [k: string]: Poll }>;
}

export const CreateNewPollViewComponent: React.FC<CreateNewPollViewComponentProps> = ({
  polls,
  fieldsProps,
  onSubmit,
  isSubmitting
}) => {
  return <PageWithSidebar>
    <CreateNewPoll
      isLoading={isSubmitting}
      fieldsProps={fieldsProps}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  </PageWithSidebar>
}