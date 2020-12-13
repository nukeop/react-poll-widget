import React, { useEffect } from 'react'
import 'lodash'

import { WizardSidebar } from '@react-poll-widget/ui'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPolls } from '../../store/actions/polls';
import { pollsSelector } from '../../store/selectors/polls';
import { useCallback } from 'react';

export const SidebarContainer: React.FC = () => {
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

  }, [
    polls
  ])


  return <WizardSidebar
    selectedPollOptions={pollOptions}
    selectedPoll={ '' }
    onSelectedPollChange={onSelectedPollChange}
    onCreateNewPoll={() => { }}
  />
}