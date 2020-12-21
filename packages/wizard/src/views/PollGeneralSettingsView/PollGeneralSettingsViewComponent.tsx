import React, { useCallback } from 'react';
import { PollGeneral } from '@react-poll-widget/ui';
import { Poll } from '@react-poll-widget/core/src/models/polls';

import { PageWithSidebar } from '../../layouts/PageWithSidebar';
import { UseFormProps } from '../../hooks/useForm';

export type PollGeneralSettingsViewComponentProps = UseFormProps & {
  poll?: Poll;
  isLoading?: boolean;
  onDelete: React.MouseEventHandler;
}

export const PollGeneralSettingsViewComponent: React.FC<PollGeneralSettingsViewComponentProps> = ({
  poll,
  fieldsProps,
  onSubmit,
  onDelete,
  isSubmitting,
  isLoading
}) => {
  const onSave = useCallback(() => onSubmit(), [onSubmit]);
  return <PageWithSidebar>
    <PollGeneral
      poll={poll}
      fieldsProps={fieldsProps}
      isLoading={isLoading || isSubmitting}
      onSave={onSave}
      onDelete={onDelete}
    />
  </PageWithSidebar>
}