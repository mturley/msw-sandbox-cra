import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './AppLayout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';
import { PageSection, Title } from '@patternfly/react-core';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        {/* TODO: routes here! */}
        <PageSection>
          <Title headingLevel="h1" size="lg">
            Example page! TODO render these from routes
          </Title>
        </PageSection>
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
