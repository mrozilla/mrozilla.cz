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

const Title = Text.withComponent('h3');

Title.displayName = 'Title';
Title.propTypes = {
  ...Text.propTypes,
};
Title.defaultProps = {
  ...Text.defaultProps,
  fontFamily: typography.font.family.headings,
  fontSize:   '2rem',
  fontWeight: '900',
  lineHeight: '1em',
};

// =============================================================================
// Export
// =============================================================================

export default Title;
