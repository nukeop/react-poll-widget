import { buildUrl, getJson } from ".";

export const findAllPolls = async () => await getJson(fetch(buildUrl('polls')));