// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, number, bool } from 'prop-types';

import styled, { css } from 'styled-components';
import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const Picture = styled(View)`
  position: relative;
  display: block;

  &::before {
    content: '';

    display: block;

    padding-bottom: ${({ ratio }) => ratio * 100}%;
  }
`;

Picture.defaultProps = {
  as:       'picture',
  overflow: 'hidden',
};

export const StyledImg = styled(View)`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};

  user-drag: none;

  ${({ zoom }) => zoom
    && css`
      cursor: zoom-in;
      transition: transform 250ms;

      &:hover {
        transform: scale(2);
      }
    `}
`;

StyledImg.defaultProps = {
  as:              'img',
  objectFit:       'cover',
  backgroundColor: 'hsla(var(--hsl-text), 0.1)',
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Img({ ratio, zoom, ...rest }) {
  const handlers = {
    onError: ({ target }) => {
      // use a transparent svg as a default image
      const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";
      target.src = placeholder; // eslint-disable-line no-param-reassign
    },
    onMouseMove: ({ nativeEvent: e }) => {
      if (zoom) {
        const x = (e.offsetX / e.target.offsetWidth) * 100;
        const y = (e.offsetY / e.target.offsetHeight) * 100;
        e.target.style.transformOrigin = `${x}% ${y}%`;
      }
    },
  };

  return (
    <Picture ratio={ratio}>
      <StyledImg {...rest} zoom={zoom} {...handlers} />
    </Picture>
  );
}

Img.propTypes = {
  ratio: number,
  src:   string.isRequired,
  alt:   string.isRequired,
  zoom:  bool,
};

Img.defaultProps = {
  ratio: 1,
  zoom:  false,
};
