// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import ReactGA from 'react-ga'; // TODO add

// Screens
import HomeScreen from './screens/HomeScreen';
import ColoursScreen from './screens/ColoursScreen';
import FourOhFourScreen from './screens/FourOhFourScreen';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// =============================================================================
// Styles
// =============================================================================

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { reboot } from './utils/styles';

// eslint-disable-next-line
injectGlobal`${[normalize(), reboot]}`;

// =============================================================================
// Google Analytics
// =============================================================================

// ReactGA.initialize('UA-74251174-1'); // TODO add UA id
// browserHistory.listen(location => {
//     process.env.NODE_ENV === 'production' && ReactGA.pageview(location.pathname);
// });

// =============================================================================
// Render settings
// =============================================================================

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/lab/colours" component={ColoursScreen} />
      <Route path="/:page/:filter?" component={HomeScreen} />

      <Route component={FourOhFourScreen} />
    </Switch>
  </BrowserRouter>
);

const mountNode = document.getElementById('root');

// =============================================================================
// Go!!!
// =============================================================================

ReactDOM.render(router, mountNode);
registerServiceWorker();
