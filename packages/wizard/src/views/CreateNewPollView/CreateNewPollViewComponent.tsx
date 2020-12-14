import React from 'react';
import { CreateNewPoll } from '@react-poll-widget/ui';

import { PageWithSidebar } from '../../layouts/PageWithSidebar';
import { UseFormProps } from '../../hooks/useForm';

export type CreateNewPollViewComponentProps = UseFormProps;

export const CreateNewPollViewComponent: React.FC<CreateNewPollViewComponentProps> = ({
  fieldsProps,
  onSubmit,
  isSubmitting
}) => <PageWithSidebar>
    <CreateNewPoll
      isLoading={isSubmitting}
      fieldsProps={fieldsProps}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  </PageWithSidebar>