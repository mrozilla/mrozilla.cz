// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

const Label = styled.label`
  font-size: 0.5rem;
  text-transform: ${props => (props.isUppercase ? 'uppercase' : 'initial')};
  letter-spacing: ${props => (props.isUppercase ? '0.2em' : 'initial')};
`;

Label.displayName = 'Label';
Label.defaultProps = {
  isUppercase: true,
};

// =============================================================================
// Export
// =============================================================================

export default Label;
