// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';
import { media, grid } from '../../utils/styles';

// =============================================================================
// Container
// =============================================================================

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${grid.gutter}rem;
  padding-right: ${grid.gutter}rem;
  ${media.xs`width: ${grid.width.xs};`} ${media.sm`width: ${grid.width
      .sm};`} ${media.md`width: ${grid.width.md};`} ${media.lg`width: ${grid.width
      .lg};`} ${media.xl`width: ${grid.width.xl};`};
`;

// =============================================================================
// Row
// =============================================================================

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${grid.gutter / -1}rem;
  margin-right: ${grid.gutter / -1}rem;
  justify-content: ${({ centered }) => (centered ? 'center' : 'initial')};
`;

Row.defaultProps = {
  centered: false,
};

// =============================================================================
// Column
// =============================================================================

export const Column = styled.div`
  position: relative;
  min-height: 1px;
  ${({ noPadding }) => !noPadding && `padding-left: ${grid.gutter}rem;`} ${({ noPadding }) =>
      !noPadding && `padding-right: ${grid.gutter}rem;`} flex: 0 0 100%;
  ${({ xs }) => xs && media.xs`flex: 0 0 ${xs / grid.columns * 100}%;`} ${({ sm }) =>
      sm && media.sm`flex: 0 0 ${sm / grid.columns * 100}%;`} ${({ md }) =>
      md && media.md`flex: 0 0 ${md / grid.columns * 100}%;`} ${({ lg }) =>
      lg && media.lg`flex: 0 0 ${lg / grid.columns * 100}%;`} ${({ xl }) =>
      xl && media.xl`flex: 0 0 ${xl / grid.columns * 100}%;`} ${({ stacked }) =>
      stacked &&
      media.lg`
    &:nth-of-type(2) {
      margin-top: 10vh;
    }
    &:nth-of-type(2n - 1):not(:first-of-type):not(:last-of-type) {
      margin-top: -10vh;
    }
  `} margin-top: ${({ marginTop }) => marginTop};
`;

Column.defaultProps = {
  marginTop: '0',
  stacked:   false,
  noPadding: false,
};
