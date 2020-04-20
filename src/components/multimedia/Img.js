// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string, number, func } from 'prop-types';

import styled, { css } from 'styled-components';

import { animation } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const spinnerAnimation = animation({
  to: { transform: 'rotate(360deg)' },
  properties: '1s infinite',
});

export const Picture = styled.picture`
  --loader-hsl: var(--hsl-primary);

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ ratio }) => {
    if (ratio) {
      return css`
        &::before {
          content: '';

          display: block;
          padding-bottom: ${ratio * 100}%;
        }
      `;
    }
    return null;
  }}

  ${({ isLoaded }) => {
    if (!isLoaded) {
      return css`
        &::after {
          content: '';

          z-index: 1;
          width: 1em;
          height: 1em;

          border: 0.125em solid hsla(var(--loader-hsl), 0.1);
          border-top-color: hsla(var(--loader-hsl), 1);
          border-radius: 50%;

          animation: ${spinnerAnimation};
        }
      `;
    }
    return null;
  }}
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

export default function Img({
  pictureProps,
  ratio,
  fit,
  zoom,
  onLoad,
  onError,
  onMouseMove,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handlers = {
    onLoad: (event) => {
      setIsLoaded(true);
      onLoad(event);
    },
    onError: (event) => {
      const { target } = event;
      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"; // use a transparent svg as a default image
      setIsLoaded(true);
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
    <Picture {...pictureProps} ratio={ratio} isLoaded={isLoaded}>
      <StyledImg {...rest} zoom={zoom} {...handlers} />
    </Picture>
  );
}

Img.propTypes = {
  ratio: number,
  src: string.isRequired,
  alt: string.isRequired,
  zoom: number,
  onLoad: func,
  onError: func,
  onMouseMove: func,
};

Img.defaultProps = {
  ratio: 1,
  zoom: undefined,
  onLoad: () => {},
  onError: () => {},
  onMouseMove: () => {},
};
