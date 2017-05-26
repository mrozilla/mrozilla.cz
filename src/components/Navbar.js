// =============================================================================
// Imports
// =============================================================================

// React
// import React    from 'react';
// import { Link } from 'react-router-dom';

// Components

// =============================================================================
// Styles
// =============================================================================

import styled               from 'styled-components';
import { colour, zIndex }   from '../utils/styles';

const Navbar = styled.nav`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  
  background-color: ${colour.brand.complement};
`;

// =============================================================================
// Export
// =============================================================================

export default Navbar;