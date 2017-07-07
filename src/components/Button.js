// =============================================================================
// Import
// =============================================================================

// React
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { color, border } from '../utils/styles';

// =============================================================================
// Tab buttons
// =============================================================================

export const TabButtons = glamorous.div(
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

export const TabButton = glamorous.div(
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

TabButton.propTypes = {
  isActive: PropTypes.bool,
};

TabButton.defaultProps = {
  isActive: false,
};
