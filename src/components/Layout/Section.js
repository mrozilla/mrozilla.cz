// =============================================================================
// Styles
// =============================================================================

import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  min-height: ${({ height }) => height};
  ${({ bgImg }) =>
    bgImg &&
    css`
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: white;
      background: url(${bgImg}) no-repeat center center;
      background-size: cover;
      will-change: transform;
      z-index: -1;
    }
  `};
`;

Section.defaultProps = {
  height:        '100vh',
  paddingTop:    '10vh',
  paddingBottom: '10vh',
  marginTop:     '0',
  marginBottom:  '0',
  bgImg:         null,
};

// =============================================================================
// Export
// =============================================================================

export default Section;
