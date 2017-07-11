// =============================================================================
// Import
// =============================================================================

// React
// import React from 'react';
// import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { border } from '../utils/styles';

// =============================================================================
// Styles
// =============================================================================

export const TextArea = glamorous.textarea(
  {
    width:            '100%',
    height:           '100%',
    backgroundColor:  'white',
    border:           'none',
    fontFamily:       'inherit',
    color:            'inherit',
    lineHeight:       'inherit',
    borderRadius:     border.radius.small,
    '&::placeholder': {
      opacity: 0.5,
    },
  },
  ({ padding }) => ({
    padding,
  }),
);

// =============================================================================
// Component
// =============================================================================
