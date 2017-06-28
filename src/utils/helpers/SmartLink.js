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

export function SmartLink({ to, children, isBare, isVenter, ...rest }) {
  return !to.includes('//') && !to.includes('mailto')
    ? <Link to={to} {...rest}>{children}</Link>
    : <a href={to} {...rest}>{children}</a>
}

SmartLink.propTypes = {
  to:       PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// =============================================================================
// SmartNavLink
// =============================================================================

export function SmartNavLink({ to, children, activeClassName, isBare, isVenter, ...rest }) {
  return !to.includes('//') && !to.includes('mailto')
    ? <NavLink to={to} {...rest}>{children}</NavLink>
    : <a href={to} {...rest}>{children}</a>
}

SmartNavLink.propTypes = {
  to:       PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};