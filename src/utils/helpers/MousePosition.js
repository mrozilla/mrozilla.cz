// =============================================================================
// import
// =============================================================================

// React
import { Component } from 'react';
import PropTypes from 'prop-types';

// =============================================================================
// component
// =============================================================================

export default class MousePosition extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };
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
  handleChildRef = (el) => {
    this.childElement = el;
  };

  render() {
    return this.props.children(
      this.state,
      this.handleMouseMove,
      this.handleMouseLeave,
      this.handleChildRef,
    );
  }
}
