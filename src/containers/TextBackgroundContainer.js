// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { number, string } from 'prop-types';
import { fadeInAnimation } from '../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function TextBackgroundContainer({
  amount,
  symbol,
  rotateModifier,
  opacityModifier,
  scaleModifier,
}) {
  if (typeof document !== 'undefined') {
    return (
      <div
        style={{
          position:         'absolute',
          width:            '100%',
          height:           '100%',
          left:             0,
          top:              0,
          overflow:         'hidden',
          zIndex:           -1,
          pointerEvents:    'none',
          userSelect:       'none',
          msUserSelect:     'none',
          MozUserSelect:    'none',
          WebkitUserSelect: 'none',
          animation:        `${fadeInAnimation} 5000ms both`,
        }}
        aria-hidden="true"
      >
        {new Array(amount).fill().map((_, i) => (
          <span
            key={i} // eslint-disable-line
            style={{
              position:  'absolute',
              top:       `${Math.random() * 100}%`,
              left:      `${Math.random() * 100}%`,
              color:     `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
              transform: `rotate(${Math.floor(
                Math.random() * rotateModifier,
              )}deg) scale(${Math.random() * scaleModifier})`,
              opacity: `${Math.random() * opacityModifier}`,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>
    );
  }
  return null;
}

TextBackgroundContainer.propTypes = {
  amount:          number,
  symbol:          string,
  rotateModifier:  number,
  opacityModifier: number,
  scaleModifier:   number,
};
TextBackgroundContainer.defaultProps = {
  amount:
    typeof document !== 'undefined'
      ? Math.floor(document.documentElement.scrollHeight / 2)
      : 100,
  symbol: '!',

  rotateModifier:  360,
  opacityModifier: 1,
  scaleModifier:   1,
};
