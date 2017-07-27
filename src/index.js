// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Styles
import { css } from 'glamor';
import glamorous from 'glamorous';
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

if (process.env.NODE_ENV === 'development') {
  glamorous.config.useDisplayNameInClassName = true;
}

css.insert(normalize);
css.insert(reboot);

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
    ReactDOM.render(
      <BrowserRouter>
        <Route component={withLocation(NextApp)} />
      </BrowserRouter>,
      mountNode,
    );
  });
}

// =============================================================================
// Go!!!
// =============================================================================

ReactDOM.render(router, mountNode);
registerServiceWorker();
