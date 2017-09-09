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

const Subtitle = Text.withComponent('h4');

Subtitle.displayName = 'Subtitle';
Subtitle.propTypes = {
  ...Text.propTypes,
};
Subtitle.defaultProps = {
  ...Text.defaultProps,
  fontFamily: typography.font.family.headings,
  fontSize:   '3rem',
  fontWeight: '300',
  lineHeight: '1em',
};

// =============================================================================
// Export
// =============================================================================

export default Subtitle;
