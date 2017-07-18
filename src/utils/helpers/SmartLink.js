// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// =============================================================================
// SmartLink
// =============================================================================

export function SmartLink({ to, children, target, isBare, ...rest }) {
  return !to.includes('//') && !to.includes('mailto')
    ? <Link to={to} {...rest}>
      {children}
    </Link>
    : <a href={to} target={target} {...rest}>
      {children}
    </a>;
}

SmartLink.propTypes = {
  to:       PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target:   PropTypes.string,
  isBare:   PropTypes.bool,
};

SmartLink.defaultProps = {
  target: null,
  isBare: false,
};

// =============================================================================
// SmartNavLink
// =============================================================================

export function SmartNavLink({ to, children, target, activeClassName, isBare, ...rest }) {
  return !to.includes('//') && !to.includes('mailto')
    ? <NavLink to={to} {...rest}>
      {children}
    </NavLink>
    : <a href={to} target={target} {...rest}>
      {children}
    </a>;
}

SmartNavLink.propTypes = {
  to:              PropTypes.string.isRequired,
  children:        PropTypes.node.isRequired,
  target:          PropTypes.string,
  activeClassName: PropTypes.string,
  isBare:          PropTypes.bool,
};

SmartNavLink.defaultProps = {
  target:          null,
  activeClassName: null,
  isBare:          false,
};
