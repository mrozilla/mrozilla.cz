// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, node } from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled, { css } from 'styled-components';

import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const StyledLink = styled(Text)`
  outline: none;

  &[aria-current] {
    font-weight: 700;
  }

  ${({ look }) => {
    if (look.tertiary) {
      return null;
    }
    if (look.secondary) {
      return css`
        &:hover,
        &:focus,
        &:active {
          color: var(--color-info);
          text-decoration: underline;
        }
      `;
    }
    return css`
      text-decoration: underline;
      &:hover,
      &:focus,
      &:active {
        color: var(--color-info);
      }
    `;
  }};
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Link({ href, to, children, primary, secondary, tertiary, ...rest }) {
  const link = href || to;
  if (['http', 'mailto:', 'tel:'].some(t => link.includes(t))) {
    return (
      <StyledLink
        as={OutboundLink}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        look={{ primary, secondary, tertiary }}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledLink as={GatsbyLink} to={link} look={{ primary, secondary, tertiary }} {...rest}>
      {children}
    </StyledLink>
  );
}

Link.propTypes = {
  children: node.isRequired,
  href:     string,
  to:       string,
};
Link.defaultProps = {
  href: null,
  to:   null,
};
