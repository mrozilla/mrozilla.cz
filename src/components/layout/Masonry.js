// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Children } from 'react';
import { number, string, node, bool } from 'prop-types';

import { Ul, Li } from '~components/text/List';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Masonry({ columns, gridGap, isProvideLi, children }) {
  // split children into N arrays for columns
  const masonry = Children.toArray(children).reduce((acc, child, i) => {
    acc[i % columns] = [
      ...acc[i % columns],
      isProvideLi ? <Li key={child.key}>{child}</Li> : child,
    ];
    return acc;
  }, new Array(columns).fill([]));

  return (
    <Ul gridTemplateColumns={`repeat(${columns}, 1fr)`} gridGap={gridGap}>
      {masonry.map((column, i) => (
        <Li key={i} as="li" display="grid" gridGap={gridGap} gridAutoRows="max-content">
          <Ul gridGap={gridGap}>{column}</Ul>
        </Li>
      ))}
    </Ul>
  );
}

Masonry.propTypes = {
  columns:     number,
  gridGap:     string,
  children:    node.isRequired,
  isProvideLi: bool,
};

Masonry.defaultProps = {
  columns:     3,
  gridGap:     '1rem',
  isProvideLi: true,
};
