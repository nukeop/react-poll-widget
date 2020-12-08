import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import { indexSaga } from './sagas';

declare namespace window {
  const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()
const configureStore = (initialState?: any) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(indexSaga())
  return store;
}

export default configureStore;