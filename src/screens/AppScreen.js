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
import FourOhFourScreen from './FourOhFourScreen';

// Containers
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

// =============================================================================
// Component
// =============================================================================

export default function App({ location }) {
  return (
    <div>
      <HeaderContainer location={location} />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/lab/colours" component={ColoursScreen} />
        <Route path="/lab/writest" component={WritestScreen} />
        <Route path="/:page/:filter?" component={HomeScreen} />

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
};
