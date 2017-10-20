// =============================================================================
// import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';
import {
  border,
  color,
  transition,
  positionAbsolute,
} from '../../../utils/styles';

// components
import { SmartLink } from '../../../utils/helpers';

// =============================================================================
// component
// =============================================================================

const BareLink = styled(SmartLink)`
  outline: none;
  position: relative;
  display: block;
  &::after {
    content: '';
    ${positionAbsolute};
    opacity: 0;
    z-index: -1;
    transform: scale(1);
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    transition: ${props => props.transition};
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.05);
  }
`;

BareLink.displayName = 'BareLink';
BareLink.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius:    PropTypes.string,
  transition:      PropTypes.string,
};
BareLink.defaultProps = {
  backgroundColor: color.grey.lighter,
  borderRadius:    border.radius.medium,
  transition:      transition.short,
};

// =============================================================================
// export
// =============================================================================

export default BareLink;
