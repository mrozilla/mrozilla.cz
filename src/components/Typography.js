// =============================================================================
// Imports
// =============================================================================

// Styles
import styled from 'styled-components';
import { colour, typography } from '../utils/styles';

// =============================================================================
// Heading
// =============================================================================

export const Heading = styled.h1`
  font-family: ${typography.font.family.headings};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  line-height: 1em;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
`;

Heading.defaultProps = {
  size:   '3rem',
  weight: '900',
  marginBottom: '0',
  color:  'inherit',
  reveal: false,
};

// =============================================================================
// Subheading
// =============================================================================

export const Subheading = styled.h2`
  font-family: ${typography.font.family.headings};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  line-height: 1em;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
`;

Subheading.defaultProps = {
  size:   '2.5rem',
  weight: '900',
  marginBottom: '0',
  color:  'inherit',
};

// =============================================================================
// Title
// =============================================================================

export const Title = styled.h3`
  font-family: ${typography.font.family.headings};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  line-height: 1em;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
`;

Title.defaultProps = {
  size:   '2rem',
  weight: '900',
  marginBottom: '0',
  color:  'inherit',
};

// =============================================================================
// Subtitle
// =============================================================================

export const Subtitle = styled.h4`
  font-family: ${typography.font.family.headings};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  line-height: 1em;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
`;

Subtitle.defaultProps = {
  size:   '1.5rem',
  weight: '900',
  marginBottom: '0',
  color:  'inherit',
};

// =============================================================================
// Text
// =============================================================================

export const Text = styled.p`
  line-height: 1.25rem;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
  opacity: ${props => props.opacity};
`;

Text.defaultProps = {
  fontSize: 'inherit',
  marginBottom: '0',
  color:  'inherit',
  opacity: '1',
};

// =============================================================================
// Pill
// =============================================================================

export const Pill = styled.span`
  display: inline-block;
  border: 1px solid ${colour.brand.primary};
  color: ${colour.brand.primary};
  border-radius: 999px;
  padding: 0 1em;
  & + & {
    margin-left: 0.5rem;
  }
`;

// =============================================================================
// Helpers
// =============================================================================

export const Comma = styled.span`
  & + &:before {
    content: ', ';
  }
`;