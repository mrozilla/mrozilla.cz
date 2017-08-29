// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';

// =============================================================================
// Styles
// =============================================================================

const Flex = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  align-self: ${props => props.alignSelf};
  height: ${props => props.height};
  margin-bottom: ${props => props.marginBottom};
`;

Flex.displayName = 'Flex';
Flex.defaultProps = {}; // TODO add defaultProps

// =============================================================================
// Export
// =============================================================================

export default Flex;
