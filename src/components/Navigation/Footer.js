// =============================================================================
// Styles
// =============================================================================

import styled from 'styled-components';
import { color, media, positionAbsolute } from '../../utils/styles';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  & > div {
    margin-bottom: 1rem;
  }
  ${media.lg`
    flex-direction: row;
    & > div {
      margin-bottom: 0;
    }
  `};
  &::after {
    content: "";
    ${positionAbsolute};
    z-index: -1;
    border-top: 1px solid ${color.grey.lighter};
  }
`;

Footer.displayName = 'Footer';

// =============================================================================
// Export
// =============================================================================

export default Footer;
