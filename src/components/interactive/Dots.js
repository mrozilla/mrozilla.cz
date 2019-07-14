// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Dots({ size, amount, orientation, gap, colors, css, ...rest }) {
  return (
    <View
      css={`
        ${css};
        display: grid;
        grid-auto-flow: ${orientation};
        grid-gap: ${gap};
      `}
      {...rest}
    >
      {Array.from({ length: amount }, (_, i) => i).map((dot, i) => (
        <View
          key={dot}
          css={`
            height: ${size};
            width: ${size};
            background-color: ${colors[i]};
            border-radius: 999px;
          `}
        />
      ))}
    </View>
  );
}

Dots.defaultProps = {
  size:        '.5rem',
  amount:      3,
  orientation: 'row',
  gap:         '.25rem',
};
