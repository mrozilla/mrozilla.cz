// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { border, shadow, transition, positionAbsolute } from '../utils/styles';

// Components
import { Column } from './Layout';
import { Title, Text } from './Typography';

// =============================================================================
// Styles
// =============================================================================

const Colour = styled.div`
  position: relative;
  padding-bottom: 100%;
  transition: ${transition.primary.short} transform,
  &:hover {
    transform: scale(1.1);
    z-index: 1;
    border-radius: ${border.radius.small};
    box-shadow: ${shadow.small};
  }
`;

Colour.displayName = 'Colour';

const ColourInfo = styled.div`
  ${positionAbsolute};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

ColourInfo.displayName = 'ColourInfo';

// =============================================================================
// Component
// =============================================================================

export default function ColourCard({ colour: { name, hex }, width }) {
  return (
    <Column sm={width} paddingLeft="0" paddingRight="0">
      <Colour style={{ backgroundColor: hex }}>
        <ColourInfo>
          <Title fontSize="0.5rem">
            {name}
          </Title>
          <Text>
            {hex}
          </Text>
        </ColourInfo>
      </Colour>
    </Column>
  );
}

ColourCard.propTypes = {
  colour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex:  PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.number,
};

ColourCard.defaultProps = {
  width: 2,
};
