import React from 'react';
import reactDOM from 'react-dom';

import App from './App.jsx';

import '@/styles/main.scss';

const html = <App />;

const target = document.getElementById('app');

reactDOM.render(html, target);