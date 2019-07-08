// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, node } from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled, { css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const StyledLink = styled.a`
  outline: none;

  &[aria-current] {
    font-weight: 700;
  }

  ${({ look }) => {
    if (look === 'primary') {
      return css`
        color: var(--color-brand-primary);
        text-decoration: underline;
      `;
    }

    if (look === 'secondary') {
      return css`
        text-decoration: underline var(--color-brand-primary);
        &:hover,
        &:focus,
        &:active {
          color: var(--color-brand-primary);
        }
      `;
    }

    if (look === 'tertiary') {
      return css`
        &:hover,
        &:focus,
        &:active {
          color: var(--color-brand-primary);
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

export default function Link({ href, to, children, ...rest }) {
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
