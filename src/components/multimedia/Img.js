// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, number } from 'prop-types';

import styled from 'styled-components';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const Picture = styled(View)`
  position: relative;
  display: block;

  background-color: hsla(var(--hsl-text), 0.1);

  &::before {
    content: '';

    display: block;

    padding-bottom: ${({ ratio }) => ratio * 100}%;
  }
`;

Picture.defaultProps = {
  as: 'picture',
};

export const StyledImg = styled(View)`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  user-drag: none;
`;

StyledImg.defaultProps = {
  as: 'img',
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Img({ ratio, ...rest }) {
  const handleError = ({ target }) => {
    // use a transparent svg as a default image
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";
    target.src = placeholder; // eslint-disable-line no-param-reassign
  };

  return (
    <Picture ratio={ratio}>
      <StyledImg {...rest} onError={handleError} />
    </Picture>
  );
}

Img.propTypes = {
  ratio: number,
  src:   string.isRequired,
  alt:   string.isRequired,
};

Img.defaultProps = {
  ratio: 1,
};
