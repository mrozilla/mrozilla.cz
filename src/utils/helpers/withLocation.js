// =============================================================================
// Import
// =============================================================================

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

// Utils
import smoothScroll from './smoothScroll';

process.env.NODE_ENV === 'production' && ReactGA.initialize('UA-77153555-1');

// =============================================================================
// Component
// =============================================================================

export default function (WrappedComponent) {
  return class withLocation extends Component {
    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search:   PropTypes.string.isRequired,
        hash:     PropTypes.string.isRequired,
      }).isRequired,
    };

    componentDidMount() {
      this.componentDidUpdate();
    }

    componentDidUpdate() {
      this.trackPage(this.props.location);
      this.props.location.hash === ''
        ? this.scrollToTop()
        : this.scrollToHash(this.props.location.hash);
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
    scrollToTop = () => {
      const element = document.querySelector('#root');
      element && smoothScroll(element);
    };
    scrollToHash = (hash) => {
      const element = document.querySelector(hash);
      element && smoothScroll(element);
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
