import { useCallback } from "react"
import { updatePoll, UpdatePollDto } from "../api/polls";

export const useUpdatePoll = () => {
  const onUpdatePoll = useCallback(async (id: string, dto: UpdatePollDto) => await updatePoll(id, dto),
    []);
  return {
    onUpdatePoll
  };
}