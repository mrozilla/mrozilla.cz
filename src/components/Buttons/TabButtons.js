// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';
import { color, border } from '../../utils/styles';

// =============================================================================
// Tab buttons
// =============================================================================

const TabButtons = styled.div`
  display: flex;
  padding: 0.25rem;
  border: 1px solid ${color.grey.lighter};
  border-radius: ${border.radius.small};
  margin-bottom: ${props => props.marginBottom};
`;

TabButtons.displayName = 'TabButtons';

// =============================================================================
// Export
// =============================================================================

export default TabButtons;
