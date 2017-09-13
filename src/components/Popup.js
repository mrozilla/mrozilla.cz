// =============================================================================
// Import
// =============================================================================

// react
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';
import { color, zIndex, animation } from '../utils/styles';

// =============================================================================
// Component
// =============================================================================

const Popup = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 2rem;
  text-align: center;
  z-index: ${zIndex.popover};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  animation: 250ms ${animation.fade} reverse forwards;
  animation-delay: 1000ms;
`;

Popup.displayName = 'Popup';
Popup.propTypes = {
  top:             PropTypes.string,
  bottom:          PropTypes.string,
  backgroundColor: PropTypes.string,
  color:           PropTypes.string,
};
Popup.defaultProps = {
  top:             '0',
  bottom:          'auto',
  backgroundColor: color.brand.success,
  color:           'white',
};

// =============================================================================
// Export
// =============================================================================

export default Popup;
