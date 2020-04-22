// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { node, bool } from 'prop-types';

import styled from 'styled-components';
import { useEventListener } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const StyledCollapsible = styled.div`
  --max-height: auto;

  overflow: hidden;
  max-height: ${({ isCollapsed }) => (isCollapsed ? '0px' : 'var(--max-height)')};
  transition: max-height 250ms;
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Collapsible({ isCollapsed, children, ...rest }) {
  const ref = React.useRef();

  const setMaxSizeVariable = (element) => {
    element.style.setProperty('--max-height', `${element.scrollHeight}px`);
  };

  React.useEffect(() => setMaxSizeVariable(ref.current), [children]);
  useEventListener('resize', () => setMaxSizeVariable(ref.current));

  return (
    <StyledCollapsible ref={ref} isCollapsed={isCollapsed} {...rest}>
      {children}
    </StyledCollapsible>
  );
}

Collapsible.propTypes = {
  children: node.isRequired,
  isCollapsed: bool,
};
Collapsible.defaultProps = {
  isCollapsed: false,
};
