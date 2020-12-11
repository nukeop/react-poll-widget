import { buildUrl, getJson, post, get } from ".";

export const findAllPolls = async () => await getJson(get(buildUrl('polls')));
export const createPoll = async (name: string) => await getJson(
  post(buildUrl('polls'), { name })
)