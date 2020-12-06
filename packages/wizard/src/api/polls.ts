import { buildUrl } from ".";

export const findAllPolls = () => fetch(buildUrl('polls'));