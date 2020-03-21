// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, number, bool } from 'prop-types';

import styled, { css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

export const Picture = styled.picture`
  position: relative;
  display: block;

  &::before {
    content: '';

    display: block;

    padding-bottom: ${({ ratio }) => ratio * 100}%;
  }
`;

Picture.defaultProps = {
  as: 'picture',
  overflow: 'hidden',
};

export const StyledImg = styled.img`
  user-drag: none;

  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
  background-color: hsla(var(--hsl-text), 0.1);

  ${({ zoom }) => {
    if (zoom) {
      return css`
        cursor: zoom-in;
        transition: transform 250ms;
        z-index: var(--z-index-modal);

        &:hover {
          transform: scale(2);
        }
      `;
    }
    return null;
  }}
`;

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
  src: string.isRequired,
  alt: string.isRequired,
  zoom: bool,
};

Img.defaultProps = {
  ratio: 1,
  zoom: false,
};
