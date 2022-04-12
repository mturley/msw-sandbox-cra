import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './AppLayout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { worker } from './mocks/browser';

import './index.css';
import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';

import { TempPage } from './TempPage';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        {/* TODO: replace this with routes! */}
        <TempPage />
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
