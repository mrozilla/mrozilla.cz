// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// =============================================================================
// Component
// =============================================================================

export default function withMousePosition(WrappedComponent) {
  return class extends Component {
    state = {
      el: null,
      x:  0,
      y:  0,
    };

    handleMouseMove = (e) => {
      const rect = this._reactInternalInstance._hostParent._hostNode.getBoundingClientRect();
      this.setState({
        x: 0.5 - (e.nativeEvent.clientX - rect.left) / rect.width,
        y: 0.5 - (e.nativeEvent.clientY - rect.top) / rect.height,
      });
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
          {...this.props}
        />
      );
    }
  };
}
