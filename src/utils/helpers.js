// =============================================================================
// Imports
// =============================================================================

// React
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

// Styles

// =============================================================================
// withPosition
// =============================================================================

export function withPosition(WrappedComponent) {
  return class extends Component {
    state = {
      isInViewport: false,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleVisibility);
      this.handleVisibility();
    };

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleVisibility);
    };

    handleVisibility = () => {
      const rect = ReactDOM.findDOMNode(this.el).getBoundingClientRect();
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
          ref={el => this.el = el}
          {...this.props}
        />
      );
    }
  };
}

// =============================================================================
// withPosition
// =============================================================================

export function FirstChild(props) {
  const childrenArray = Children.toArray(props.children);
  return childrenArray[0] || null;
}

// =============================================================================
// Smart links
// =============================================================================

export function SmartLink({ to, children, ...rest }) {
  return !to.includes('//') && !to.includes('mailto')
    ? <Link to={to} {...rest}>{children}</Link>
    : <a href={to} {...rest}>{children}</a>
}

SmartLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export function SmartNavLink({ to, children, ...rest }) {
  return !to.includes('//') && !to.includes('mailto')
    ? <NavLink to={to} {...rest}>{children}</NavLink>
    : <a href={to} {...rest}>{children}</a>
}

SmartNavLink.propTypes = {
  to: PropTypes.string.isRequired,
};

// =============================================================================
// Export
// =============================================================================

// export default Reveal;