// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// Screens
import HomeScreen from './HomeScreen';
import ColoursScreen from './ColoursScreen';
import FourOhFourScreen from './FourOhFourScreen';

// =============================================================================
// Component
// =============================================================================

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/lab/colours" component={ColoursScreen} />
      <Route path="/:page/:filter?" component={HomeScreen} />

      <Route component={FourOhFourScreen} />
    </Switch>
  );
}
