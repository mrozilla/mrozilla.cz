// =============================================================================
// Import
// =============================================================================

// React
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { color } from '../../utils/styles';

// =============================================================================
// Tab buttons
// =============================================================================

const TabButton = styled.div`
  flex: 1;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
  border-radius: inherit;
  font-weight: ${props => (props.isActive ? '900' : 'inherit')};
  background-color: ${props =>
    props.isActive ? color.grey.lighter : 'transparent'};
`; // TODO move to TabButtons.js and rename file to Tabs.js

TabButton.displayName = 'TabButton';
TabButton.propTypes = {
  isActive: PropTypes.bool,
};
TabButton.defaultProps = {
  isActive: false,
};

// =============================================================================
// Export
// =============================================================================

export default TabButton;
