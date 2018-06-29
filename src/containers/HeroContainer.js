// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { shape, string } from 'prop-types';

import { Heading } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroContainer({ hero }) {
  return (
    <Heading
      fontSize="5rem"
      fontWeight="400"
      lineHeight="6rem"
      margin="-1rem 0 0 0"
      gridArea="hero"
    >
      {hero.title}
    </Heading>
  );
}

HeroContainer.propTypes = {
  hero: shape({
    title: string.isRequired,
  }).isRequired,
};
