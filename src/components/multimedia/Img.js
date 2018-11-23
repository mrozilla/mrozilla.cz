// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const StyledImg = styled(View)`
  display: block;
  width: 100%;

  min-height: 25vmin;
  background-color: hsla(var(--hsl-text), 0.1);
`;

StyledImg.defaultProps = {
  as: 'img',
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Img(props) {
  const handleError = ({ target }) => {
    // use a transparent svg as a default image
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";
    target.src = placeholder; // eslint-disable-line no-param-reassign
    target.classList.add('srcError');
  };

  return <StyledImg {...props} onError={handleError} />;
}

Img.propTypes = {
  src: string,
  alt: string,
};

Img.defaultProps = {
  src: '',
  alt: '',
};
