import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import configureStore, { history } from './store';
import './index.css';

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);