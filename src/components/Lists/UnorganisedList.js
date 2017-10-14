// =============================================================================
// import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';

// =============================================================================
// component
// =============================================================================

const UnorganisedList = styled.ul`margin-top: ${props => props.marginTop};`;

UnorganisedList.displayName = 'UnorganisedList';
UnorganisedList.propTypes = {
  marginTop: PropTypes.string,
};
UnorganisedList.defaultProps = {
  marginTop: '0',
};

// =============================================================================
// export
// =============================================================================

export default UnorganisedList;
