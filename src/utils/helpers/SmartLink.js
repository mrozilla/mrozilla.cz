// =============================================================================
// import
// =============================================================================

// react
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// helpers
import { isRouterLink } from '../../utils/helpers';

// =============================================================================
// SmartLink
// =============================================================================

export function SmartLink({
  to,
  children,
  target,
  backgroundColor,
  borderRadius,
  transformOrigin,
  ...rest
}) {
  return isRouterLink(to, target) ? (
    <Link to={to} {...rest}>
      {children}
    </Link>
  ) : (
    <a href={to} target={target} {...rest}>
      {children}
    </a>
  );
}

SmartLink.propTypes = {
  to:       PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target:   PropTypes.string,
};
SmartLink.defaultProps = {
  target: null,
};

// =============================================================================
// SmartNavLink
// =============================================================================

export function SmartNavLink({
  to,
  children,
  target,
  backgroundColor,
  borderRadius,
  transformOrigin,
  activeClassName,
  ...rest
}) {
  return isRouterLink(to, target) ? (
    <NavLink to={to} {...rest}>
      {children}
    </NavLink>
  ) : (
    <a href={to} target={target} {...rest}>
      {children}
    </a>
  );
}

SmartNavLink.propTypes = {
  to:              PropTypes.string.isRequired,
  children:        PropTypes.node.isRequired,
  target:          PropTypes.string,
  activeClassName: PropTypes.string,
};
SmartNavLink.defaultProps = {
  target:          null,
  activeClassName: null,
};
