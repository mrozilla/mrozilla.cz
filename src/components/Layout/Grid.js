// =============================================================================
// Styles
// =============================================================================

import styled from 'styled-components';
import { media, grid } from '../../utils/styles';

export const Container = styled.div`
	position: relative;
  margin-left: auto;
	margin-right: auto;
	padding-left: 1rem;
	padding-right: 1rem;
	${media.xs`width: ${grid.width.xs};`}
	${media.sm`width: ${grid.width.sm};`}
	${media.md`width: ${grid.width.md};`}
	${media.lg`width: ${grid.width.lg};`}
	// ${media.xl`width: ${grid.width.xl};`}
`;

export const Row = styled.div`
  display: flex;
	flex-wrap: wrap;
	margin-left:  ${grid.gutter / -2}rem;
	margin-right: ${grid.gutter / -2}rem;
	justify-content: ${props => props.centered ? 'center' : 'initial'};
`;

Row.defaultProps = {
  centered: false,
};

export const Column = styled.div`
  position: relative;
	min-height: 1px;
	${props => !props.noPadding && `padding-left:  ${grid.gutter / 2}rem`};
	${props => !props.noPadding && `padding-right:  ${grid.gutter / 2}rem`};
	
	flex: 0 0 100%;
	${props => props.xs && media.xs`flex: 0 0 ${((props.xs / grid.columns) * 100)}%;`}
	${props => props.sm && media.sm`flex: 0 0 ${((props.sm / grid.columns) * 100)}%;`}
	${props => props.md && media.md`flex: 0 0 ${((props.md / grid.columns) * 100)}%;`}
	${props => props.lg && media.lg`flex: 0 0 ${((props.lg / grid.columns) * 100)}%;`}
	${props => props.xl && media.xl`flex: 0 0 ${((props.xl / grid.columns) * 100)}%;`}
	
	${props => props.stacked && media.lg`
    &:nth-of-type(2) {
      margin-top: 10vh;
    }
    &:nth-of-type(2n - 1):not(:first-of-type):not(:last-of-type) {
      margin-top: -10vh;
    }
	`}
	
	margin-top: ${props => props.marginTop};
`;

Column.defaultProps = {
  marginTop: '0',
  stacked:   false,
  noPadding: false,
};

// =============================================================================
// Export
// =============================================================================

// export default Container;