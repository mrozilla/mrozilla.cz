// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding = '10vh 0' }) => padding};

  ${''} &:first-of-type {
    padding-top: 20vh;
  }
  ${''};
`;
