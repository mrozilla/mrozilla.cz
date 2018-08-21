// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';

import { Heading } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroContainer({ title }) {
  return (
    <Heading fontSize="5rem" fontWeight="400" lineHeight="6rem" margin="-1rem 0 0 0" gridArea="hero">
      {title}
    </Heading>
  );
}

HeroContainer.propTypes = {
  title: string.isRequired,
};
