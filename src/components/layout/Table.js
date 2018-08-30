// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// table
// ─────────────────────────────────────────────────────────────────────────────

const NativeTable = styled.table(({
  width, tableLayout, whiteSpace, margin,
}) => ({
  width,
  '@media screen and (min-width: 1200px)': {
    tableLayout,
  },
  whiteSpace,
  margin,
}));

NativeTable.defaultProps = {
  width:      '100%',
  whiteSpace: 'pre',
};

export default function Table({ children, ...rest }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <NativeTable {...rest}>{children}</NativeTable>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// tr
// ─────────────────────────────────────────────────────────────────────────────

Table.R = styled.tr`
  box-shadow: 0 1px 0 0 hsla(var(--hsl-text), 0.1);
  cursor: ${({ cursor }) => cursor};
`;

// ─────────────────────────────────────────────────────────────────────────────
// th
// ─────────────────────────────────────────────────────────────────────────────

Table.H = styled.th``;

// ─────────────────────────────────────────────────────────────────────────────
// td
// ─────────────────────────────────────────────────────────────────────────────

Table.D = styled.td(({ padding, opacity }) => ({
  padding,
  opacity,
}));

Table.D.defaultProps = {
  padding: '0.5rem',
};

// ─────────────────────────────────────────────────────────────────────────────
// thead
// ─────────────────────────────────────────────────────────────────────────────

Table.Head = styled.thead`
  box-shadow: 0 2px 0 0 hsla(var(--hsl-text), 0.1);
  & ${Table.H} {
    padding: 1rem 0.5rem;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// tbody
// ─────────────────────────────────────────────────────────────────────────────

Table.Body = styled.tbody`
  & ${Table.R}:hover {
    background-color: hsla(var(--hsl-text), 0.05);
  }
`;

Table.Foot = styled.tfoot``;
