import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { indexSaga } from './sagas';

declare namespace window {
  const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware()
const configureStore = (initialState?: any) => {
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ))
  );
  sagaMiddleware.run(indexSaga())
  return store;
}

export default configureStore;