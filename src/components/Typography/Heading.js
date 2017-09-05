// =============================================================================
// Import
// =============================================================================

// styles
import { typography } from '../../utils/styles';

// components
import { Text } from '../Typography';

// =============================================================================
// Component
// =============================================================================

const Heading = Text.withComponent('h1');

Heading.displayName = 'Heading';
Heading.propTypes = {
  ...Text.propTypes,
};
Heading.defaultProps = {
  ...Text.defaultProps,
  fontFamily:    typography.font.family.headings,
  fontSize:      '3rem',
  fontWeight:    '900',
  lineHeight:    '1em',
  letterSpacing: '-0.025em',
};

// =============================================================================
// Export
// =============================================================================

export default Heading;
