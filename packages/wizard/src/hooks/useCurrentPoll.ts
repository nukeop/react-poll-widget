import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router"
import { fetchPoll } from "../store/actions/polls";
import { pollSelector, pollsSelector } from "../store/selectors/polls";

export const useCurrentPoll = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch<{ id?: string; }>();

  useEffect(() => {
    params.id && dispatch(fetchPoll.request(params.id));
  }, [
    params.id, dispatch
  ]);

  const poll = useSelector(pollSelector(params.id));
  const polls = useSelector(pollsSelector);
  
  return { 
    poll,
    isLoading: polls.isLoading
  }
}