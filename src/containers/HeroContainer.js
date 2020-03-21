// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';

import { H1, P, Link } from '~components';
import { parseLinks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroContainer({ title, codeLink }) {
  return (
    <header
      css={`
        grid-area: hero;
      `}
    >
      <H1
        css={`
          font-size: 4rem;
          line-height: 5rem;

          @media screen and (min-width: 600px) {
            font-size: 5rem;
            line-height: 6rem;
            margin: -1rem 0 0;
          }
        `}
      >
        {parseLinks(title, { type: 'primary' })}
      </H1>
      {codeLink && (
        <P
          css={`
            margin: 2rem 0 0;
          `}
        >
          Curious about how it&apos;s done?{' '}
          <Link to={codeLink} look="secondary">
            Explore the code
          </Link>
          !
        </P>
      )}
    </header>
  );
}

HeroContainer.propTypes = {
  title: string.isRequired,
  codeLink: string,
};
HeroContainer.defaultProps = {
  codeLink: undefined,
};
