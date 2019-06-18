// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Dots({ size, amount, orientation, gap, colors, ...rest }) {
  return (
    <View display="grid" gridGap={gap} {...rest}>
      {Array.from({ length: amount }, (_, i) => i).map((dot, i) => (
        <View key={dot} height={size} width={size} backgroundColor={colors[i]} borderRadius="50%" />
      ))}
    </View>
  );
}

Dots.defaultProps = {
  size:        '0.5rem',
  amount:      3,
  orientation: 'row',
  gap:         '0.25rem',
};
