import React, { useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router';

import { WizardSidebar } from '@react-poll-widget/ui'
import { Link } from 'react-router-dom';
import { useAllPolls } from '../../hooks/useAllPolls';

export const SidebarContainer: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id?: string; }>();

  const { polls } = useAllPolls();
  const pollOptions = polls.data?.map(poll => ({
    key: poll.id,
    text: poll.name,
    value: poll.id
  }));

  const onSelectedPollChange = useCallback((e, { value }) => {
    history.push(`/poll/${value}`)
  }, [history]);

  return <WizardSidebar
    selectedPollOptions={pollOptions}
    selectedPoll={params.id}
    onSelectedPollChange={onSelectedPollChange}
    onCreateNewPoll={() => { }}
    GeneralLink={ params.id ? () =>  <Link to={`/poll/${params.id}`}>General</Link> : undefined }
    StepsLink={ params.id ? () =>  <Link to={`/poll/${params.id}/steps`}>Steps</Link> : undefined }
  />
}