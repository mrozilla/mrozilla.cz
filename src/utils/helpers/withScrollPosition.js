// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// =============================================================================
// withScrollPosition
// =============================================================================

export function withScrollPosition(WrappedComponent) {
  return class extends Component {
    state = {
      el:           null,
      isInViewport: false,
    };

    componentDidMount() {
      this.setState({
        el: ReactDOM.findDOMNode(this),
      }, () => {
        window.addEventListener('scroll', this.handleVisibility);
        this.handleVisibility();
      });
    };

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleVisibility);
    };

    handleVisibility = () => {
      const rect = this.state.el.getBoundingClientRect();
      this.setState({
        isInViewport: rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight))
                      || rect.top <= ((window.innerHeight || document.documentElement.clientHeight))
        // rect.top >= 0 // Potential different solution
        // && rect.left >= 0
        // && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        // && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      });
    };

    render() {
      return (
        <WrappedComponent
          isInViewport={this.state.isInViewport}
          {...this.props}
        />
      );
    }
  };
}