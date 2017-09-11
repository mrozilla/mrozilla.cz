// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// =============================================================================
// Component
// =============================================================================

export default function (WrappedComponent) {
  return class withMousePosition extends Component {
    state = {
      x: 0,
      y: 0,
    };

    handleMouseMove = (e) => {
      const rect = this.childElement.getBoundingClientRect();
      this.setState({
        x: 0.5 - ((e.nativeEvent.clientX - rect.left) / rect.width),
        y: 0.5 - ((e.nativeEvent.clientY - rect.top) / rect.height),
      }); // prettier-ignore
    };
    handleMouseLeave = () => {
      this.setState({
        x: 0,
        y: 0,
      });
    };

    render() {
      return (
        <WrappedComponent
          x={this.state.x}
          y={this.state.y}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
          childRef={(el) => {
            this.childElement = el;
          }}
          {...this.props}
        />
      );
    }
  };
}
