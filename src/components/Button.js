// =============================================================================
// Import
// =============================================================================

// React
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { color, border, transition, positionAbsolute } from '../utils/styles';

// =============================================================================
// Button
// =============================================================================

export const Button = glamorous.button(
  {
    fontFamily:      'inherit',
    color:           'inherit',
    border:          'none',
    outline:         '0',
    padding:         '0.5rem 1rem',
    cursor:          'pointer',
    backgroundColor: color.grey.lighter,
    borderRadius:    border.radius.small,
    '& + &':         {
      marginLeft: '0.25rem', // TODO FIGURE OUT MULTIPLE CLASSES PROBLEM
    },
    '&:hover': {
      backgroundColor: color.grey.light,
    },
  },
  ({ type }) =>
    type && {
      position:   'relative',
      overflow:   'hidden',
      transition: `${transition.primary.medium} all`,
      '&:hover':  {
        backgroundColor: 'transparent',
        color:           'white',
      },
      '&::after': {
        content:         "''",
        ...positionAbsolute(),
        transition:      'inherit',
        zIndex:          -1,
        transform:       'scaleX(0)',
        transformOrigin: 'left',
        backgroundColor: color.brand.primary,
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
      },
    },
  ({ type }) => type === 'primary' && {},
  ({ type }) =>
    type === 'secondary' && {
      border:          `1px solid ${color.grey.lighter}`,
      backgroundColor: 'transparent',
    },
  ({ isFull }) =>
    isFull && {
      width:     '100%',
      textAlign: 'center',
    },
);

Button.displayName = 'Button';

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

TabButtons.displayName = 'TabButtons';

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

TabButton.displayName = 'TabButton';
TabButton.propTypes = {
  isActive: PropTypes.bool,
};
TabButton.defaultProps = {
  isActive: false,
};
