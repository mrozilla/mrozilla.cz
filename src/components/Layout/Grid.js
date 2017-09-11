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
  ${media.xs`width: ${grid.width.xs};`};
  ${media.sm`width: ${grid.width.sm};`};
  ${media.md`width: ${grid.width.md};`};
  ${media.lg`width: ${grid.width.lg};`};
  ${media.xl`width: ${grid.width.xl};`};
`;

Container.displayName = 'Container';

// =============================================================================
// Row
// =============================================================================

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${grid.gutter / -1}rem;
  margin-right: ${grid.gutter / -1}rem;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  margin-Bottom: ${props => props.marginBottom};
`;

Row.displayName = 'Row';
Row.defaultProps = {
  alignItems:     'flex-start',
  justifyContent: 'flex-start',
  marginBottom:   0,
};

// =============================================================================
// Column
// =============================================================================

export const Column = styled.div`
  position: relative;
  min-height: 1px;
  flex: 0 0 100%;
  max-width: 100%;
  padding-left:  ${props => props.paddingLeft};
  padding-right:  ${props => props.paddingRight};
  padding-top:  ${props => props.paddingTop};
  padding-bottom:  ${props => props.paddingBottom};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  ${({ xs }) => xs && media.xs`
    flex: 0 0 ${(xs / grid.columns) * 100}%;
    max-width: ${(xs / grid.columns) * 100}%;
  `};
  ${({ sm }) => sm && media.sm`
    flex: 0 0 ${(sm / grid.columns) * 100}%;
    max-width: ${(sm / grid.columns) * 100}%;
  `};
  ${({ md }) => md && media.md`
    flex: 0 0 ${(md / grid.columns) * 100}%;
    max-width: ${(md / grid.columns) * 100}%;
  `};
  ${({ lg }) => lg && media.lg`
    flex: 0 0 ${(lg / grid.columns) * 100}%;
    max-width: ${(lg / grid.columns) * 100}%;
  `};
  ${({ xl }) => xl && media.xl`
    flex: 0 0 ${(xl / grid.columns) * 100}%;
    max-width: ${(xl / grid.columns) * 100}%;
  `};
  ${({ isStacked }) => isStacked && media.lg`
    &:nth-of-type(even) {
      margin-top: 10vh;
    }
    &:nth-of-type(odd):last-of-type:not(:first-of-type) {
      margin-top: 10vh;
    }
  `};
`; // prettier-ignore

Column.displayName = 'Column';
Column.defaultProps = {
  paddingLeft:   `${grid.gutter}rem`,
  paddingRight:  `${grid.gutter}rem`,
  paddingTop:    '0',
  paddingBottom: '0',
  marginTop:     '0',
  marginBottom:  '0',
  isStacked:     false,
};
