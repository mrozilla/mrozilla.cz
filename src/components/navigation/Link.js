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

const RouterLink = styled(GatsbyLink)`
  line-height: 1.25;
  ${({ type }) => {
    if (type === 'primary') {
      return css`
        text-decoration: underline;
        text-decoration-color: hsla(var(--hsl-text), 0.1);
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

const ExternalLink = RouterLink.withComponent(OutboundLink);

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Link({
  href, to, children, ...rest
}) {
  const link = href || to;
  if (['http', 'mailto:', 'tel:'].some(t => link.includes(t))) {
    return (
      <ExternalLink href={link} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <RouterLink to={link} {...rest}>
      {children}
    </RouterLink>
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
