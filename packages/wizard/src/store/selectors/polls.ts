import { RootState } from '../reducers/index'

export const pollsStore = (s: RootState) => s.polls;
export const pollsSelector = (s: RootState) => pollsStore(s).polls;