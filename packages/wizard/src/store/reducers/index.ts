import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { storeKeys } from '../consts/keys';

import { pollsReducer } from './polls';

const rootReducer = combineReducers({
  [storeKeys.polls]: pollsReducer
});

export default rootReducer;
export type RootState = StateType<typeof rootReducer>;