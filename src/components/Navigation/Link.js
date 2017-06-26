// =============================================================================
// Imports
// =============================================================================

// React
// import React    from 'react';

// Components
import { SmartLink, SmartNavLink } from '../../utils/helpers';

// Styles
import styled, { css } from 'styled-components';
import { colour, media, transition } from '../../utils/styles';

// =============================================================================
// Link
// =============================================================================

export const Link = styled(SmartLink)`
  ${props => !props.bare && css`
    position: relative;
    display: inline-flex;
    font-weight: 900;
    vertical-align: bottom;
    color: ${colour.brand.primary};
    &:after {
      content: '';
      position: absolute;
      top: 0;bottom: 0;left: 0;right: 0;
      width: 0; height: 100%;
      border-radius: 0.125rem;
      z-index: -1;
      background-color: ${colour.brand.primary};
      transition: ${transition.primary.medium} width;
    }
    &:hover {
      color: ${colour.grey.lightest};
    }
    &:hover:after {
      width: 100%;
    }
  `}
  ${props => props.venter && css`
    display: inline-flex;
    align-items: center;
  `}
`;

Link.defaultProps = {
  bare:   false,
  venter: false,
};

// =============================================================================
// NavLink
// =============================================================================

export const NavLink = styled(SmartNavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  &:after {
    content: "";
	  position: absolute;
	  top: 0;bottom: 0;left: 0;right: 0;
	  z-index: -1;
	  transition: ${transition.primary} all;
    border-bottom: 1px solid ${colour.grey.lighter};
  }
  &:hover:after {
    border-bottom: 2px solid ${colour.brand.primary};
  }
  ${media.lg`& + & {
    margin-left: 1rem;
  }`}
`;