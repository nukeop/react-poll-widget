import { useCallback } from "react";
import { useDispatch } from "react-redux"
import { postPoll } from "../../store/actions/polls";

export const useCreateNewPollViewProps = () => {
  const dispatch = useDispatch();
  const onCreateNewPoll = useCallback((name: string) => dispatch(postPoll.request(name)),
    [dispatch]);

  return {
    onCreateNewPoll
  }
}