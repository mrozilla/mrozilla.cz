// =============================================================================
// Imports
// =============================================================================

// React
import React, { Component } from 'react';

// =============================================================================
// Swivel
// =============================================================================

export class Swivel extends Component { // TODO extract withMousePosition helper
  state = {
    x:          0,
    y:          0,
    transition: 'none',
  };
  static defaultProps = {
    intensity:   10,
    perspective: 1000,
  };
  handleMouseMove = (e) => {
    this.setState({
      x:          (0.5 - e.nativeEvent.offsetX / e.target.getBoundingClientRect().width) * -this.props.intensity,
      y:          (0.5 - e.nativeEvent.offsetY / e.target.getBoundingClientRect().height) * this.props.intensity,
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
    const {children, perspective} = this.props;
    const {x, y, transition} = this.state;

    return (
      <div
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        style={{
          transform:       `perspective(${perspective}) rotateX(${y}deg) rotateY(${x}deg)`,
          WebkitTransform: `perspective(${perspective}) rotateX(${y}deg) rotateY(${x}deg)`,
          transition:      transition
        }}
      >
        {children}
      </div>
    );
  }
}

// =============================================================================
// Export
// =============================================================================

export default Swivel;