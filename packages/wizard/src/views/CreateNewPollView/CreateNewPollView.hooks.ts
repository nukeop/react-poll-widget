import { useCallback } from "react"
import { createPoll } from '../../api/polls';

export const useCreateNewPollViewProps = () => {
  const onCreateNewPoll = useCallback(async (name: string) => {
    return await createPoll(name);
  }, []);
  return {
    onCreateNewPoll
  }
}