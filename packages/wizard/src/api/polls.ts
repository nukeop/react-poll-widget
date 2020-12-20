import { buildUrl, getJson, post, get, put } from ".";

export type UpdatePollDto = Partial<{
  name: string;
}>

export const findAllPolls = async () => await getJson(get(buildUrl('polls')));
export const findPoll = async (id: string) => await getJson(get(buildUrl(`polls/${id}`)))
export const createPoll = async (name: string) => await getJson(
  post(buildUrl('polls'), { name })
);
export const updatePoll = async (id: string, dto: UpdatePollDto) => await getJson(
  put(buildUrl(`polls/${id}`), dto)
);