// =============================================================================
// Imports
// =============================================================================

// React
import React, { Component } from 'react';

// =============================================================================
// withMousePosition
// =============================================================================

export default function withMousePosition(WrappedComponent) {
  return class withMousePosition extends Component {
    state = {
      x:          0,
      y:          0,
      transition: 'none',
    };
    handleMouseMove = (e) => {
      this.setState({
        x:          (0.5 - e.nativeEvent.offsetX / e.target.getBoundingClientRect().width),
        y:          (0.5 - e.nativeEvent.offsetY / e.target.getBoundingClientRect().height),
        transition: '100ms ease transform',
      })
    };
    handleMouseLeave = () => {
      this.setState({
        x:          0,
        y:          0,
        transition: '1s ease transform',
      })
    };

    render() {
      return ( // TODO figure out a way without the wrapper
        <div
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          <WrappedComponent
            x={this.state.x}
            y={this.state.y}
            transition={this.state.transition}
            {...this.props}
          />
        </div>
      );
    }
  };
}