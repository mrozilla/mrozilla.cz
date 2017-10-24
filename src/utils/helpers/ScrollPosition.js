// =============================================================================
// import
// =============================================================================

// react
import { Component } from 'react';
import PropTypes from 'prop-types';

// =============================================================================
// component
// =============================================================================

export default class ScrollPosition extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };
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
    const rect = this.childElement.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const isInViewport =
      rect.bottom <= viewportHeight || rect.top <= viewportHeight;
    this.setState({
      isInViewport,
      wasInViewport: this.state.wasInViewport || isInViewport,
    });
  };
  handleChildRef = (el) => {
    this.childElement = el;
  };

  render() {
    return this.props.children(this.state, this.handleChildRef);
  }
}
