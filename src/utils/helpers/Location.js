// =============================================================================
// import
// =============================================================================

// react
import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

// utils
import smoothScroll from './smoothScroll';

// config
process.env.NODE_ENV === 'production' && ReactGA.initialize('UA-77153555-1');

// =============================================================================
// component
// =============================================================================

export default class Location extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search:   PropTypes.string.isRequired,
      hash:     PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    this.trackPage(this.props.location);
    this.props.location.hash === ''
      ? this.scrollTo('#root')
      : this.scrollTo(this.props.location.hash);
  }

  trackPage = (location) => {
    if (
      process.env.NODE_ENV === 'production' &&
      !document.cookie.includes('user_is_admin')
    ) {
      ReactGA.set({ page: location.pathname + location.search });
      ReactGA.pageview(location.pathname + location.search);
    }
  };
  scrollTo = (hash) => {
    const element = document.querySelector(hash);
    element && smoothScroll(element);
  };

  render() {
    return this.props.children;
  }
}
