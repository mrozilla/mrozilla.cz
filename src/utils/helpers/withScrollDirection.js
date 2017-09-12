// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// =============================================================================
// Component
// =============================================================================

export default function (WrappedComponent) {
  return class withScrollDirection extends Component {
    state = {
      isScrolling: {
        up:   false,
        down: false,
      },
      lastScrollTop: 0,
      // timeoutHelper: null,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScrollDirection);
      this.handleScrollDirection();
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScrollDirection);
      // clearTimeout(this.state.timeoutHelper);
    }

    handleScrollDirection = () => {
      // clearTimeout(this.state.timeoutHelper);
      // const isScrolling = setTimeout(() => {
      //   this.setState({
      //     isScrolling: {
      //       up:   false,
      //       down: false,
      //     },
      //   });
      // }, 1000);
      this.setState({
        isScrolling: {
          up:   window.pageYOffset < this.state.lastScrollTop,
          down: window.pageYOffset > this.state.lastScrollTop,
        },
        lastScrollTop: window.pageYOffset,
        // timeoutHelper: isScrolling,
      });
    };

    render() {
      return (
        <WrappedComponent
          isScrolling={this.state.isScrolling}
          {...this.props}
        />
      );
    }
  };
}
