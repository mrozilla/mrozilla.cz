// =============================================================================
// Import
// =============================================================================

// React
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { color } from '../../utils/styles';

// =============================================================================
// Tab buttons
// =============================================================================

const TabButton = glamorous.div(
  {
    flex:         '1',
    cursor:       'pointer',
    padding:      '1rem',
    textAlign:    'center',
    borderRadius: 'inherit',
  },
  ({ isActive }) =>
    isActive && {
      fontWeight:      '900',
      backgroundColor: color.grey.lighter,
    },
);

TabButton.displayName = 'TabButton';
TabButton.propTypes = {
  isActive: PropTypes.bool,
};
TabButton.defaultProps = {
  isActive: false,
};

// =============================================================================
// Export
// =============================================================================

export default TabButton;
