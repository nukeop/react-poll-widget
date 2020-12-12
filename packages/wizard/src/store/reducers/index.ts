import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { storeKeys } from '../consts/keys';
import { pollsReducer } from './polls';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  [storeKeys.polls]: pollsReducer
});

export default rootReducer;
export type RootState = StateType<ReturnType<typeof rootReducer>>;