// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';
import {
  color,
  border,
  transition,
  positionAbsolute,
} from '../../utils/styles';

// =============================================================================
// Button
// =============================================================================

const Button = styled.button`
  position: ${props => (props.type ? 'relative' : 'initial')};
  overflow: ${props => (props.type ? 'hidden' : 'initial')};
  transition: ${transition.medium};
  font-family: inherit;
  color: inherit;
  outline: none;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  border: ${props =>
    props.type === 'secondary' ? `1px solid ${color.grey.lighter}` : 'none'};
  background-color: ${props =>
    props.type === 'secondary' ? 'transparent' : color.grey.lighter};
  border-radius: ${border.radius.small};
  width: ${props => (props.isFull ? '100%' : 'initial')};
  & + & {
    margin-left: ${props => (props.isFull ? '0' : '1rem')};
    margin-top: ${props => (props.isFull ? '1rem' : '0')};
  }
  &:hover {
    background-color: ${props =>
    props.type ? 'transparent' : color.grey.light};
    color: ${props => (props.type ? 'white' : 'inherit')};
  }
  &::after {
    content: '';
    ${positionAbsolute};
    transition: inherit;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    background-color: ${color.brand.primary};
  }
  &:hover::after {
    transform: scaleX(1);
  }
`; // TODO figure out primary etc. better

Button.displayName = 'Button';

// =============================================================================
// Export
// =============================================================================

export default Button;
