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

const OrganisedList = styled.ol`margin-top: ${props => props.marginTop};`;

OrganisedList.displayName = 'OrganisedList';
OrganisedList.propTypes = {
  type:      PropTypes.string,
  marginTop: PropTypes.string,
};
OrganisedList.defaultProps = {
  type:      '1',
  marginTop: '0',
};

// =============================================================================
// export
// =============================================================================

export default OrganisedList;
