// =============================================================================
// Import
// =============================================================================

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import GoogleAnalytics from 'react-ga';

// Utils
import smoothScroll from './smoothScroll';

// GoogleAnalytics.initialize('UA-0000000-0');

// =============================================================================
// Component
// =============================================================================

export default function withLocation(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        hash:     PropTypes.string.isRequired,
      }).isRequired,
    };

    componentDidMount() {
      this.trackPage(this.props.location.pathname);
    }

    componentDidUpdate() {
      this.trackPage(this.props.location.pathname);
      this.props.location.hash === ''
        ? this.scrollToTop()
        : this.scrollToHash(this.props.location.hash);
    }

    trackPage = (page) => {
      console.log(page);
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
