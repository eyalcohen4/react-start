/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import reactDOM from 'react-dom';

import '@/styles/main.scss';

import App from './App';

const html = <App />;

const target = document.getElementById('app');

reactDOM.render(html, target);
