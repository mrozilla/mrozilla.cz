// =============================================================================
// Import
// =============================================================================

// Styles
import glamorous from 'glamorous';

// =============================================================================
// Styles
// =============================================================================

const Label = glamorous.label(
  {
    fontSize: '0.5rem',
  },
  ({ isUppercase }) =>
    isUppercase && {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
);

Label.displayName = 'Label';
Label.defaultProps = {
  isUppercase: true,
};

// =============================================================================
// Export
// =============================================================================

export default Label;
