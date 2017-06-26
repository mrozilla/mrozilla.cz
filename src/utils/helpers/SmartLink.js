// =============================================================================
// Imports
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// =============================================================================
// SmartLink
// =============================================================================

export function SmartLink({ to, children, bare, venter, ...rest }) { // TODO figure out a better solution for filtering out props
  return !to.includes('//') && !to.includes('mailto')
    ? <Link to={to} {...rest}>{children}</Link>
    : <a href={to} {...rest}>{children}</a>
}

SmartLink.propTypes = {
  to: PropTypes.string.isRequired,
};

// =============================================================================
// SmartNavLink
// =============================================================================

export function SmartNavLink({ to, children, bare, venter, ...rest }) { // TODO figure out a better solution for filtering out props
  return !to.includes('//') && !to.includes('mailto')
    ? <NavLink to={to} {...rest}>{children}</NavLink>
    : <a href={to} {...rest}>{children}</a>
}

SmartNavLink.propTypes = {
  to: PropTypes.string.isRequired,
};