// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, node } from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import styled, { css } from 'styled-components';

import { Text } from '../primitives';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const StyledLink = styled(Text)`
  &[aria-current] {
    font-weight: 700;
  }

  ${({ type }) => {
    if (type === 'primary') {
      return css`
        &:hover,
        &:focus,
        &:active {
          text-decoration: underline;
        }
      `;
    }
    if (type === 'secondary') {
      return css`
        text-decoration: underline;
        text-decoration-color: hsla(var(--hsl-text), 0.5);
        &:hover,
        &:focus,
        &:active {
          text-decoration: underline;
        }
      `;
    }
    return null;
  }};
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Link({
  href, to, children, ...rest
}) {
  const link = href || to;
  if (['http', 'mailto:', 'tel:'].some(t => link.includes(t))) {
    return (
      <StyledLink as={OutboundLink} href={link} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledLink as={GatsbyLink} to={link} {...rest}>
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
