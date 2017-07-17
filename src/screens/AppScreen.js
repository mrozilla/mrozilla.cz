// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// Screens
import HomeScreen from './HomeScreen';
import ColoursScreen from './ColoursScreen';
import WritestScreen from './WritestScreen';
import CountOnMeScreen from './CountOnMeScreen';
import PassworldScreen from './PassworldScreen';

import FourOhFourScreen from './FourOhFourScreen';

// Containers
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

// =============================================================================
// Component
// =============================================================================

export default function App({ location, history }) {
  return (
    <div>
      <HeaderContainer location={location} history={history} />
      <Switch>
        <Route path="/lab/colours" component={ColoursScreen} />
        <Route path="/lab/writest" component={WritestScreen} />
        <Route path="/lab/count-on-me" component={CountOnMeScreen} />
        <Route path="/lab/passworld" component={PassworldScreen} />
        <Route path="/:page?/:filter?" component={HomeScreen} />

        <Route component={FourOhFourScreen} />
      </Switch>
      <FooterContainer />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
