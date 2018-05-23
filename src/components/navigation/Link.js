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
        display: inline-block;
        text-decoration: underline;
        text-decoration-color: var(--color-grey-light);
        &.active {
          text-decoration-color: var(--color-grey);
        }
        &:hover {
          transform: scale(1.05);
          background-color: var(--color-bg);
          text-decoration-color: var(--color-grey-dark);
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
