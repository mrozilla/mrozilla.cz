// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, number, func } from 'prop-types';

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
        transition: transform 250ms;

        &:hover {
          transform: scale(${zoom});
          z-index: var(--z-index-modal);
        }
      `;
    }
    return null;
  }}
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Img({ ratio, zoom, onError, onMouseMove, ...rest }) {
  const handlers = {
    onError: (event) => {
      const { target } = event;
      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"; // use a transparent svg as a default image
      onError(event);
    },
    onMouseMove: (event) => {
      if (zoom) {
        const { offsetX, offsetY, target } = event?.nativeEvent;
        const x = (offsetX / target.offsetWidth) * 100;
        const y = (offsetY / target.offsetHeight) * 100;
        target.style.transformOrigin = `${x}% ${y}%`;
      }
      onMouseMove(event);
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
  zoom: number,
  onError: func,
  onMouseMove: func,
};

Img.defaultProps = {
  ratio: 1,
  zoom: undefined,
  onError: () => {},
  onMouseMove: () => {},
};
