// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// =============================================================================
// Component
// =============================================================================

export default function (WrappedComponent) {
  return class withScrollPosition extends Component {
    state = {
      isInViewport:  false,
      wasInViewport: false,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScrollPosition);
      this.handleScrollPosition();
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScrollPosition);
    }

    handleScrollPosition = () => {
      const rect = this._reactInternalInstance._hostParent._hostNode.getBoundingClientRect(); // eslint-disable-line
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      this.setState({
        isInViewport:
          rect.bottom <= viewportHeight || rect.top <= viewportHeight,
        wasInViewport:
          this.state.wasInViewport ||
          rect.bottom <= viewportHeight ||
          rect.top <= viewportHeight,
      });
    };

    render() {
      return (
        <WrappedComponent
          isInViewport={this.state.isInViewport}
          wasInViewport={this.state.wasInViewport}
          {...this.props}
        />
      );
    }
  };
}

// // Potential different solution
// rect.top >= 0
// && rect.left >= 0
// && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
// && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
