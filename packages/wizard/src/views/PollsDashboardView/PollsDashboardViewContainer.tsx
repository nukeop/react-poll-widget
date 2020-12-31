import React from 'react';

import { useAllPolls } from '../../hooks/useAllPolls';
import { PollsDashboardViewComponent } from './PollsDashboardViewComponent';

export const PollsDashboardViewContainer: React.FC = () => {
const { polls } = useAllPolls();
  return <PollsDashboardViewComponent
    polls={polls?.data}
    isLoading={polls?.isLoading}
  />;
}