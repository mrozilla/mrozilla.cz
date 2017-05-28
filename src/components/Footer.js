// =============================================================================
// Styles
// =============================================================================

import styled    from 'styled-components';
import {colour}   from '../utils/styles';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  &:after {
    content: "";
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  z-index: -1;
    border-top: 1px solid ${colour.grey.light};
  }
`;

// =============================================================================
// Export
// =============================================================================

export default Footer;
