// =============================================================================
// Import
// =============================================================================

// Styles
import glamorous from 'glamorous';
import {
  color,
  border,
  transition,
  positionAbsolute,
} from '../../utils/styles';

// =============================================================================
// Button
// =============================================================================

const Button = glamorous.button(
  ({ isFull }) => ({
    fontFamily:      'inherit',
    color:           'inherit',
    border:          'none',
    outline:         '0',
    padding:         '0.5rem 1rem',
    cursor:          'pointer',
    textAlign:       'center',
    backgroundColor: color.grey.lighter,
    borderRadius:    border.radius.small,
    width:           isFull ? '100%' : 'initial',
    '& + &':         {
      marginLeft: isFull ? '0' : '0.25rem', // TODO MULTIPLE CLASSES PROBLEM
      marginTop:  isFull ? '0.5rem' : '0', // TODO MULTIPLE CLASSES PROBLEM
    },
    '&:hover': {
      backgroundColor: color.grey.light,
    },
  }),
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
);

Button.displayName = 'Button';

// =============================================================================
// Export
// =============================================================================

export default Button;
