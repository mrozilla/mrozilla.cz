// =============================================================================
// Import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// =============================================================================
// Component
// =============================================================================

const Text = styled.p`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  text-transform: ${props => props.textTransform};
  letter-spacing: ${props => props.letterSpacing};
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  cursor: ${props => props.cursor};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`;

Text.displayName = 'Text';
Text.propTypes = {
  fontFamily:    PropTypes.string,
  fontSize:      PropTypes.string,
  fontWeight:    PropTypes.string,
  lineHeight:    PropTypes.string,
  textAlign:     PropTypes.string,
  textTransform: PropTypes.string,
  letterSpacing: PropTypes.string,
  color:         PropTypes.string,
  opacity:       PropTypes.string,
  cursor:        PropTypes.string,
  marginBottom:  PropTypes.string,
  marginTop:     PropTypes.string,
};
Text.defaultProps = {
  fontFamily:    'inherit',
  fontSize:      'inherit',
  fontWeight:    '400',
  lineHeight:    '3rem',
  textAlign:     'inherit',
  textTransform: 'inherit',
  letterSpacing: '0',
  color:         'inherit',
  opacity:       '1',
  cursor:        'initial',
  marginBottom:  '0',
  marginTop:     '0',
};

// =============================================================================
// Export
// =============================================================================

export default Text;
