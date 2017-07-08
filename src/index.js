// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Styles
import { css } from 'glamor';
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
// Go!!!
// =============================================================================

ReactDOM.render(router, mountNode);
registerServiceWorker();
