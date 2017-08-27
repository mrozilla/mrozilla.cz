// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';
import { typography } from '../utils/styles';

// =============================================================================
// Text
// =============================================================================

export const Text = styled.p`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  text-transform: ${props => props.textTransform};
  letter-spacing: ${props => props.letterSpacing};
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  cursor: ${props => props.cursor};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`;

Text.displayName = 'Text';
Text.defaultProps = {
  fontFamily:    'inherit',
  fontSize:      'inherit',
  fontWeight:    '400',
  lineHeight:    '1.25rem',
  textAlign:     'inherit',
  textTransform: 'inherit',
  letterSpacing: '0',
  color:         'inherit',
  opacity:       '1',
  cursor:        'initial',
  marginBottom:  '0',
  marginTop:     '0',
};

// =============================================================================
// Heading
// =============================================================================

export const Heading = Text.withComponent('h1');

Heading.displayName = 'Heading';
Heading.defaultProps = {
  ...Text.defaultProps,
  fontFamily:    typography.font.family.headings,
  fontSize:      '3rem',
  fontWeight:    '900',
  lineHeight:    '1em',
  letterSpacing: '-0.025em',
};

// =============================================================================
// Subheading
// =============================================================================

export const Subheading = Text.withComponent('h2');

Subheading.displayName = 'Subheading';
Subheading.defaultProps = {
  ...Text.defaultProps,
  fontFamily: typography.font.family.headings,
  fontSize:   '2.5rem',
  fontWeight: '300',
  lineHeight: '1em',
};

// =============================================================================
// Title
// =============================================================================

export const Title = Text.withComponent('h3');

Title.displayName = 'Title';
Title.defaultProps = {
  ...Text.defaultProps,
  fontFamily: typography.font.family.headings,
  fontSize:   '2rem',
  fontWeight: '900',
  lineHeight: '1em',
};

// =============================================================================
// Subtitle
// =============================================================================

export const Subtitle = Text.withComponent('h4');

Subtitle.displayName = 'Subtitle';
Subtitle.defaultProps = {
  ...Text.defaultProps,
  fontFamily: typography.font.family.headings,
  fontSize:   '1.5rem',
  fontWeight: '300',
  lineHeight: '1em',
};

// =============================================================================
// Helpers
// =============================================================================

export const Comma = styled.span`
  & + &::before {
    content: ", ";
  }
`;

Comma.displayName = 'Comma';
