import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllPolls } from "../store/actions/polls";
import { pollsSelector } from "../store/selectors/polls";

export const useAllPolls = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPolls.request());
  }, [dispatch]);

  const polls = useSelector(pollsSelector);
  return { polls };
}