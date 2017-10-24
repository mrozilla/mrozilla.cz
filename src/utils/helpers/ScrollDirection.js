// =============================================================================
// import
// =============================================================================

// react
import { Component } from 'react';
import PropTypes from 'prop-types';

// =============================================================================
// component
// =============================================================================

export default class ScrollDirection extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };
  state = {
    isScrolling: {
      up:   false,
      down: false,
    },
    lastScrollTop: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollDirection);
    this.handleScrollDirection();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDirection);
  }

  handleScrollDirection = () => {
    this.setState({
      isScrolling: {
        up:   window.pageYOffset < this.state.lastScrollTop,
        down: window.pageYOffset > this.state.lastScrollTop,
      },
      lastScrollTop: window.pageYOffset,
    });
  };

  render() {
    return this.props.children(this.state);
  }
}
