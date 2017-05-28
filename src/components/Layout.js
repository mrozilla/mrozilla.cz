// =============================================================================
// Styles
// =============================================================================

import styled               from 'styled-components';
// import { colour, zIndex }   from '../utils/styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 0;
  min-height: ${props => props.height};
`;

Section.defaultProps = {
  height: '100vh',
};

// =============================================================================
// Export
// =============================================================================

// export default Navbar;