import React from 'react';
import { PollGeneral } from '@react-poll-widget/ui';
import { FieldsPropsType } from '@react-poll-widget/ui/src/components/types';
import { Poll } from '@react-poll-widget/core/src/models/polls';

import { PageWithSidebar } from '../../layouts/PageWithSidebar';

export type PollGeneralSettingsViewComponentProps = {
  poll?: Poll;
  fieldsProps: FieldsPropsType;
}

export const PollGeneralSettingsViewComponent: React.FC<PollGeneralSettingsViewComponentProps> = ({
  poll,
  fieldsProps
}) => <PageWithSidebar>
    <PollGeneral
      poll={poll}
      fieldsProps={fieldsProps}
    />
  </PageWithSidebar>