// =============================================================================
// Import
// =============================================================================

// Styles
import glamorous from 'glamorous';
import { color, border } from '../../utils/styles';

// =============================================================================
// Tab buttons
// =============================================================================

const TabButtons = glamorous.div(
  {
    display:      'flex',
    padding:      '0.125rem',
    border:       `1px solid ${color.grey.lighter}`,
    borderRadius: border.radius.small,
  },
  ({ marginBottom }) => ({
    marginBottom,
  }),
);

TabButtons.displayName = 'TabButtons';

// =============================================================================
// Export
// =============================================================================

export default TabButtons;
