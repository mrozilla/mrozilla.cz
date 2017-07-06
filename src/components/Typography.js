// =============================================================================
// Import
// =============================================================================

// Styles
import glamorous from 'glamorous';
import { colour, typography } from '../utils/styles';

// =============================================================================
// Heading
// =============================================================================

export const Heading = glamorous.h1(
  {
    lineHeight:    '1em',
    letterSpacing: '-0.025em',
    fontFamily:    typography.font.family.headings,
  },
  ({ fontSize, fontWeight, color, marginBottom }) => ({
    fontSize,
    fontWeight,
    color,
    marginBottom,
  }),
);

Heading.defaultProps = {
  fontSize:     '3rem',
  fontWeight:   '900',
  color:        'inherit',
  marginBottom: '0',
};

// =============================================================================
// Subheading
// =============================================================================

export const Subheading = glamorous.h2(
  {
    lineHeight: '1em',
    fontFamily: typography.font.family.headings,
  },
  ({ fontSize, fontWeight, color, marginBottom }) => ({
    fontSize,
    fontWeight,
    color,
    marginBottom,
  }),
);

Subheading.defaultProps = {
  fontSize:     '2.5rem',
  fontWeight:   '300',
  color:        'inherit',
  marginBottom: '0',
};

// =============================================================================
// Title
// =============================================================================

export const Title = glamorous.h3(
  {
    lineHeight: '1em',
    fontFamily: typography.font.family.headings,
  },
  ({ fontSize, fontWeight, color, marginBottom }) => ({
    fontSize,
    fontWeight,
    color,
    marginBottom,
  }),
);

Title.defaultProps = {
  fontSize:     '2rem',
  fontWeight:   '900',
  color:        'inherit',
  marginBottom: '0',
};

// =============================================================================
// Subtitle
// =============================================================================

export const Subtitle = glamorous.h4(
  {
    lineHeight: '1em',
    fontFamily: typography.font.family.headings,
  },
  ({ fontSize, fontWeight, color, marginBottom }) => ({
    fontSize,
    fontWeight,
    color,
    marginBottom,
  }),
);

Subtitle.defaultProps = {
  fontSize:     '1.5rem',
  fontWeight:   '300',
  color:        'inherit',
  marginBottom: '0',
};

// =============================================================================
// Text
// =============================================================================

export const Text = glamorous.p(
  {
    lineHeight: '1.25rem',
  },
  ({ fontSize, fontWeight, color, marginBottom, opacity, textAlign }) => ({
    fontSize,
    fontWeight,
    color,
    marginBottom,
    opacity,
    textAlign,
  }),
);

Text.defaultProps = {
  fontSize:     'inherit',
  fontWeight:   '400',
  color:        'inherit',
  marginBottom: '0',
  opacity:      '1',
};

// =============================================================================
// Pill
// =============================================================================

export const Pill = glamorous.span({
  display:      'inline-block',
  borderRadius: 999,
  padding:      '0 1em',
  color:        colour.brand.primary,
  border:       `1px solid ${colour.brand.primary}`,
  '& + &':      {
    marginLeft: '0.5rem',
  },
});

// =============================================================================
// Helpers
// =============================================================================

export const Comma = glamorous.span({
  '& + &::before': {
    content: "', '",
  },
});
