import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { pollsReducer } from './polls';

const rootReducer = combineReducers({
  polls: pollsReducer
});

export default rootReducer;
export type RootState = StateType<typeof rootReducer>;