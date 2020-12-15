import React, { useCallback, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { WizardSidebar } from '@react-poll-widget/ui'
import { fetchAllPolls } from '../../store/actions/polls';
import { pollsSelector } from '../../store/selectors/polls';
import { Link } from 'react-router-dom';

export const SidebarContainer: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id?: string; }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPolls.request());
  }, [dispatch]);

  const polls = useSelector(pollsSelector);
  const pollOptions = polls.data?.map(poll => ({
    key: poll.id,
    text: poll.name,
    value: poll.id
  }));

  const onSelectedPollChange = useCallback((e, { value }) => {
    history.push(`/poll/${value}`)
  }, [
    polls
  ])

  return <WizardSidebar
    selectedPollOptions={pollOptions}
    selectedPoll={params.id}
    onSelectedPollChange={onSelectedPollChange}
    onCreateNewPoll={() => { }}
    GeneralLink={() => params.id ? <Link to={`/poll/${params.id}`}>General</Link> : null}
    StepsLink={() => params.id ? <Link to={`/poll/${params.id}/steps`}>Steps</Link> : null}
  />
}