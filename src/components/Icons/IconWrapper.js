// =============================================================================
// import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// =============================================================================
// style
// =============================================================================

const IconWrapper = styled.span`
  display: flex;
  margin-left: ${props => props.marginLeft};
  & + & {
    margin-left: ${props => props.marginLeft};
  }
`;

IconWrapper.displayName = 'IconWrapper';
IconWrapper.propTypes = {
  marginLeft: PropTypes.string,
};
IconWrapper.defaultPRops = {
  marginLeft: 'initial',
};

// =============================================================================
// export
// =============================================================================

export default IconWrapper;
