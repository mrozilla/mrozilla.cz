// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// =============================================================================
// Component
// =============================================================================

export default function withScrollPosition(WrappedComponent) {
  return class extends Component {
    state = {
      el:           null,
      isInViewport: false,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleVisibility);
      this.handleVisibility();
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleVisibility);
    }

    handleVisibility = () => {
      const rect = this._reactInternalInstance._hostParent._hostNode.getBoundingClientRect();
      this.setState({
        isInViewport:
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
          rect.top <= (window.innerHeight || document.documentElement.clientHeight),
      });
    };

    render() {
      return <WrappedComponent isInViewport={this.state.isInViewport} {...this.props} />;
    }
  };
}

// rect.top >= 0 // Potential different solution
// && rect.left >= 0
// && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
// && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
