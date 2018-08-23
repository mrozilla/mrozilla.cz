// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';

import { H1 } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroContainer({ title }) {
  return (
    <H1 fontSize="5rem" lineHeight="6rem" margin="-1rem 0 0 0" gridArea="hero">
      {title}
    </H1>
  );
}

HeroContainer.propTypes = {
  title: string.isRequired,
};
