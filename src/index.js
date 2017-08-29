// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Styles
import { injectGlobal } from 'styled-components';
import { normalize, reboot } from './utils/styles';

// Screens
import App from './screens/AppScreen';

// Helpers
import { withLocation } from './utils/helpers';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// =============================================================================
// Global styles
// =============================================================================

injectGlobal`${normalize}`; // eslint-disable-line
injectGlobal`${reboot}`; // eslint-disable-line

// =============================================================================
// Render settings
// =============================================================================

const router = (
  <BrowserRouter>
    <Route component={withLocation(App)} />
  </BrowserRouter>
);

const mountNode = document.getElementById('root');

// =============================================================================
// Hot reloading
// =============================================================================

if (module.hot) {
  module.hot.accept('./screens/AppScreen', () => {
    const NextApp = require('./screens/AppScreen').default; // eslint-disable-line
    const nextRouter = (
      <BrowserRouter>
        <Route component={withLocation(NextApp)} />
      </BrowserRouter>
    );
    ReactDOM.render(nextRouter, mountNode);
  });
}

// =============================================================================
// Go!!!
// =============================================================================

ReactDOM.render(router, mountNode);
registerServiceWorker();
