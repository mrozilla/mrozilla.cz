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

const ListItem = styled.li`
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  marginTop:    PropTypes.string,
  marginBottom: PropTypes.string,
};
ListItem.defaultProps = {
  marginTop:    '0',
  marginBottom: '1rem',
};

// =============================================================================
// export
// =============================================================================

export default ListItem;
