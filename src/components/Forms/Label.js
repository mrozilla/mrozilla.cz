// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

const Label = styled.label`
  display: block;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-transform: ${props => props.textTransform};
  letter-spacing: ${props => props.letterSpacing};
`;

Label.displayName = 'Label';
Label.defaultProps = {
  fontSize:      '1rem',
  lineHeight:    '2rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
};

// =============================================================================
// Export
// =============================================================================

export default Label;
