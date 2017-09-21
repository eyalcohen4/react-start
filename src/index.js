/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import reactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import '@/styles/main.scss';
import store, { history } from '@/redux/store';
import App from '@/containers/App/';

const html = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById('app');

reactDOM.render(html, target);
