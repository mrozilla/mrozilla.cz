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

const Subheading = Text.withComponent('h2');

Subheading.displayName = 'Subheading';
Subheading.propTypes = {
  ...Text.propTypes,
};
Subheading.defaultProps = {
  ...Text.defaultProps,
  fontFamily: typography.font.family.headings,
  fontSize:   '6rem',
  fontWeight: '300',
  lineHeight: '1em',
};

// =============================================================================
// Export
// =============================================================================

export default Subheading;
