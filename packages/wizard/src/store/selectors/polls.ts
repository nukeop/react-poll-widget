import { RootState } from '../reducers/index'

export const pollsStore = (s: RootState) => s.polls;
export const pollsSelector = (s: RootState) => pollsStore(s).polls;
export const pollSelector = (id?: string) => (s: RootState) => pollsStore(s).polls?.data?.find(
  poll => poll.id === id
);