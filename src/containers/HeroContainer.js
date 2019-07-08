// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';

import { H1 } from '~components';
import { parseLinks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroContainer({ title }) {
  return (
    <H1
      css={`
        font-size: 5rem;
        line-height: 6rem;
        margin: -1rem 0 0;
        grid-area: hero;
      `}
    >
      {parseLinks(title, { type: 'primary' })}
    </H1>
  );
}

HeroContainer.propTypes = {
  title: string.isRequired,
};
