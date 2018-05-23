// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function TextBackgroundBlock({
  amount = 100,
  symbol = '',
  rotateModifier = 360,
  opacityModifier = 1,
  scaleModifier = 1,
}) {
  return (
    <div
      style={{
        pointerEvents: 'none',
        position:      'fixed',
        width:         '100%',
        height:        '100%',
        left:          0,
        top:           0,
        overflow:      'hidden',
        zIndex:        -1,
      }}
      aria-hidden="true"
    >
      {new Array(amount).fill().map((_, i) => (
        <span
          key={i}
          style={{
            position:  'absolute',
            top:       `${Math.random() * 100}%`,
            left:      `${Math.random() * 100}%`,
            color:     `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
            transform: `rotate(${Math.floor(Math.random() * rotateModifier)}deg) scale(${Math.random() * scaleModifier})`,
            opacity:   `${Math.random() * opacityModifier}`,
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
