// =============================================================================
// import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';
import { color, transition, positionAbsolute } from '../../../utils/styles';

// components
import { SmartLink } from '../../../utils/helpers';

// =============================================================================
// component
// =============================================================================

const Link = styled(SmartLink)`
  position: relative;
  display: inline-flex;
  font-weight: 900;
  vertical-align: bottom;
  color: ${props => props.color};
  &:hover,
  &:focus {
    color: white;
  }
  &::after {
    content: '';
    ${positionAbsolute};
    border-radius: '0.125rem';
    z-index: -1;
    transform: scaleX(0);
    background-color: ${props => props.backgroundColor};
    transform-origin: ${props => props.transformOrigin};
    transition: ${props => props.transition} transform;
  }
  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;

Link.displayName = 'Link';
Link.propTypes = {
  backgroundColor: PropTypes.string,
  color:           PropTypes.string,
  transformOrigin: PropTypes.string,
  transition:      PropTypes.string,
};
Link.defaultProps = {
  backgroundColor: color.brand.primary,
  color:           color.brand.primary,
  transformOrigin: 'left',
  transition:      transition.medium,
};

// =============================================================================
// export
// =============================================================================

export default Link;
