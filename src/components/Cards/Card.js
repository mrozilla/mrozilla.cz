// =============================================================================
// Import
// =============================================================================

// styles
import styled from 'styled-components';
import {
  color,
  border,
  transition,
  positionAbsolute,
} from '../../utils/styles';

// =============================================================================
// Component
// =============================================================================

const Card = styled.div`
  position: relative;
  border-radius: ${props => props.borderRadius};
  &::after {
    content: '';
    border-radius: inherit;
    z-index: -1;
    ${positionAbsolute};
    transform: scale(1);
    opacity: 0;
    transition: ${transition.short};
    background-color: ${props => props.backgroundColor};
  }
  &:hover::after {
    transform: scale(1.05);
    opacity: 1;
  }
`;

Card.displayName = 'Card';
Card.defaultProps = {
  backgroundColor: color.grey.lighter,
  borderRadius:    border.radius.medium,
};

// =============================================================================
// Export
// =============================================================================

export default Card;
