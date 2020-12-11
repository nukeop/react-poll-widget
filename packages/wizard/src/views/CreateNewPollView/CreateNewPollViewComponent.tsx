import React from 'react';
import { CreateNewPoll } from '@react-poll-widget/ui';

import { CreateNewPollViewProps } from './CreateNewPollViewContainer';
import { PageWithSidebar } from '../../layouts/PageWithSidebar';

export type CreateNewPollViewComponentProps = CreateNewPollViewProps

export const CreateNewPollViewComponent: React.FC<CreateNewPollViewComponentProps> = ({
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