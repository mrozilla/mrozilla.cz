// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Children } from 'react';
import { number, string, node, bool } from 'prop-types';

import { Ul, Li } from '~components/text/List';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Masonry({ columns, gap, isProvideLi, children }) {
  // split children into N arrays for columns
  const masonry = Children.toArray(children).reduce((acc, child, i) => {
    acc[i % columns] = [
      ...acc[i % columns],
      isProvideLi ? <Li key={child.key}>{child}</Li> : child,
    ];
    return acc;
  }, new Array(columns).fill([]));

  return (
    <Ul
      css={`
        grid-template-columns: repeat(${columns}, 1fr);
        grid-gap: ${gap};
      `}
    >
      {masonry.map((column, i) => (
        <Li
          key={i}
          as="li"
          css={`
            display: grid;
            grid-gap: ${gap};
            grid-auto-rows: max-content;
          `}
        >
          <Ul
            css={`
              grid-gap: ${gap};
            `}
          >
            {column}
          </Ul>
        </Li>
      ))}
    </Ul>
  );
}

Masonry.propTypes = {
  columns:     number,
  gap:         string,
  children:    node.isRequired,
  isProvideLi: bool,
};

Masonry.defaultProps = {
  columns:     3,
  gap:         '1rem',
  isProvideLi: true,
};
