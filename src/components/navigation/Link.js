// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled, { css } from 'styled-components';
import GatsbyLink from 'gatsby-link';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const RouterLink = styled(GatsbyLink)`
  transition: 250ms;
  ${({ type }) => {
    if (type === 'primary') {
      return css`
        text-decoration: underline;
        color: var(--color-grey-dark);
      `;
    }
    if (type === 'secondary') {
      return css`
        box-shadow: 0 2px var(--color-grey-light);
        &:hover {
          box-shadow: 0 2px var(--color-grey-dark);
        }
      `;
    }
    return null;
  }};
`;
const ExternalLink = RouterLink.withComponent('a');

export default ({
  href, to, children, ...rest
}) => {
  const link = href || to;
  if (['http', 'mailto:', 'tel:'].some(t => link.includes(t))) {
    return (
      <ExternalLink
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </ExternalLink>
    );
  }
  return (
    <RouterLink to={link} {...rest}>
      {children}
    </RouterLink>
  );
};
