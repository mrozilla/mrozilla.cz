// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// =============================================================================
// withMousePosition
// =============================================================================

export function withMousePosition(WrappedComponent) {
  return class extends Component {
    state = {
      el:         null,
      x:          0,
      y:          0,
    };

    componentDidMount() {
      this.setState({
        el: ReactDOM.findDOMNode(this),
      })
    }

    handleMouseMove = (e) => {
      const rect = this.state.el.getBoundingClientRect();
      this.setState({
        x:          (0.5 - ((e.nativeEvent.clientX - rect.left) / rect.width)),
        y:          (0.5 - ((e.nativeEvent.clientY - rect.top) / rect.height)),
      })
    };
    handleMouseLeave = () => {
      this.setState({
        x:          0,
        y:          0,
      })
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