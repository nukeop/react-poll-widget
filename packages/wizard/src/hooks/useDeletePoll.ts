import { useCallback } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { deletePoll } from "../api/polls"
import { fetchAllPolls } from "../store/actions/polls";

export const useDeletePoll = (redirectAfterDelete?: string) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onDeletePoll = useCallback(async (id: string) => {
    await deletePoll(id);
    await dispatch(fetchAllPolls.request());
    if (redirectAfterDelete) {
      history.push(redirectAfterDelete);
    }
  }, [dispatch, history, redirectAfterDelete]);
    
  return { onDeletePoll };
}