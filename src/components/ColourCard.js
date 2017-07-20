// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { border, shadow, transition, positionAbsolute } from '../utils/styles';

// Components
import { Column } from './Layout';
import { Title, Text } from './Typography';

// =============================================================================
// Styles
// =============================================================================

const Colour = glamorous.div({
  position:      'relative',
  paddingBottom: '100%',
  transition:    `${transition.primary.short} transform`,
  '&:hover':     {
    transform:    'scale(1.1)',
    zIndex:       1,
    borderRadius: border.radius.small,
    boxShadow:    shadow.small,
  },
});

Colour.displayName = 'Colour';

const ColourInfo = glamorous.div({
  ...positionAbsolute(),
  display:        'flex',
  flexDirection:  'column',
  alignItems:     'center',
  justifyContent: 'center',
  color:          'white',
});

ColourInfo.displayName = 'ColourInfo';

// =============================================================================
// Component
// =============================================================================

export default function ColourCard({ colour: { name, hex }, width }) {
  return (
    <Column sm={width} isPadded={false}>
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
