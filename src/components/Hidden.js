// =============================================================================
// Import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';
import { media } from '../utils/styles';

// =============================================================================
// Component
// =============================================================================

const Hidden = styled.div`
  ${props => media[props.from]`
    display: none;
  `};
  ${props => media[props.to]`
    display: ${props.display};
  `};
`;

Hidden.displayName = 'Hidden';
Hidden.propTypes = {
  from: PropTypes.string,
  to:   PropTypes.string.isRequired,
};
Hidden.defaultProps = {
  from:    'xs',
  display: 'block',
};

// =============================================================================
// Export
// =============================================================================

export default Hidden;
