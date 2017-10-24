// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// Helpers
import { importAsync, Location } from '../utils/helpers';

// Containers
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

// Async Screens
const HomeScreen = importAsync(() => import('./HomeScreen'));
const AboutScreen = importAsync(() => import('./AboutScreen'));
const LegalScreen = importAsync(() => import('./LegalScreen'));
const ColoursScreen = importAsync(() => import('./ColoursScreen'));
const WritestScreen = importAsync(() => import('./WritestScreen'));
const CountOnMeScreen = importAsync(() => import('./CountOnMeScreen'));
const PassworldScreen = importAsync(() => import('./PassworldScreen'));
const InAnyCaseScreen = importAsync(() => import('./InAnyCaseScreen'));

const FourOhFourScreen = importAsync(() => import('./FourOhFourScreen'));

// =============================================================================
// Component
// =============================================================================

export default function App({ location, history }) {
  return (
    <Location location={location}>
      <HeaderContainer location={location} history={history} />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/work/:filter?" component={HomeScreen} />
        <Route exact path="/lab" component={HomeScreen} />
        <Route path="/lab/colours" component={ColoursScreen} />
        <Route path="/lab/writest" component={WritestScreen} />
        <Route path="/lab/count-on-me" component={CountOnMeScreen} />
        <Route path="/lab/passworld" component={PassworldScreen} />
        <Route path="/lab/in-any-case" component={InAnyCaseScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/legal" component={LegalScreen} />

        <Route component={FourOhFourScreen} />
      </Switch>
      <FooterContainer />
    </Location>
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
