// =============================================================================
// Import
// =============================================================================

// Styles
import glamorous from 'glamorous';
import { typography } from '../utils/styles';

// =============================================================================
// Heading
// =============================================================================

export const Heading = glamorous.h1(
  {
    lineHeight:    '1em',
    letterSpacing: '-0.025em',
    fontFamily:    typography.font.family.headings,
  },
  ({ fontSize, fontWeight, color, textAlign, marginBottom }) => ({
    fontSize,
    fontWeight,
    color,
    textAlign,
    marginBottom,
  }),
);

Heading.displayName = 'Heading';
Heading.defaultProps = {
  fontSize:     '3rem',
  fontWeight:   '900',
  color:        'inherit',
  textAlign:    'inherit',
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
  ({ fontSize, fontWeight, color, textAlign, marginBottom }) => ({
    fontSize,
    fontWeight,
    color,
    textAlign,
    marginBottom,
  }),
);

Subheading.displayName = 'Subheading';
Subheading.defaultProps = {
  fontSize:     '2.5rem',
  fontWeight:   '300',
  color:        'inherit',
  textAlign:    'inherit',
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
  ({ fontSize, fontWeight, color, textAlign, marginBottom }) => ({
    fontSize,
    fontWeight,
    color,
    textAlign,
    marginBottom,
  }),
);

Title.displayName = 'Title';
Title.defaultProps = {
  fontSize:     '2rem',
  fontWeight:   '900',
  color:        'inherit',
  textAlign:    'inherit',
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
  ({ fontSize, fontWeight, color, textAlign, marginBottom, cursor }) => ({
    fontSize,
    fontWeight,
    color,
    textAlign,
    marginBottom,
    cursor,
  }),
);

Subtitle.displayName = 'Subtitle';
Subtitle.defaultProps = {
  fontSize:     '1.5rem',
  fontWeight:   '300',
  color:        'inherit',
  textAlign:    'inherit',
  marginBottom: '0',
  cursor:       'initial',
};

// =============================================================================
// Text
// =============================================================================

export const Text = glamorous.p(
  ({
    lineHeight,
    fontSize,
    fontWeight,
    color,
    marginBottom,
    opacity,
    textAlign,
    textTransform,
    letterSpacing,
  }) => ({
    lineHeight,
    fontSize,
    fontWeight,
    color,
    marginBottom,
    opacity,
    textAlign,
    textTransform,
    letterSpacing,
  }),
  ({ isTruncated }) =>
    isTruncated && {
      maxWidth:     '100%',
      overflowX:    'hidden',
      whiteSpace:   'nowrap',
      textOverflow: 'ellipsis',
    },
);

Text.displayName = 'Text';
Text.defaultProps = {
  lineHeight:    '1.25rem',
  fontSize:      'inherit',
  fontWeight:    '400',
  color:         'inherit',
  marginBottom:  '0',
  opacity:       '1',
  textAlign:     'inherit',
  textTransform: 'inherit',
  letterSpacing: '0',
  isTruncated:   false,
};

// =============================================================================
// Helpers
// =============================================================================

export const Comma = glamorous.span({
  '& + &::before': {
    content: "', '",
  },
});

Comma.displayName = 'Comma';
