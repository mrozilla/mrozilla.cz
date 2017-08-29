// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${props => props.minHeight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

Section.displayName = 'Section';
Section.defaultProps = {
  minHeight:     '100vh',
  paddingTop:    '10vh',
  paddingBottom: '10vh',
  marginTop:     '0',
  marginBottom:  '0',
};

// =============================================================================
// Export
// =============================================================================

export default Section;
