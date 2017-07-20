// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { border, color, transition, positionAbsolute } from '../utils/styles';

// =============================================================================
// Styles
// =============================================================================

const ImageWrapper = glamorous.figure(
  {
    position:        'relative',
    overflow:        'hidden',
    borderRadius:    border.radius.small,
    backgroundColor: color.grey.lighter,
    transition:      transition.primary.medium,
  },
  ({ ratio, marginBottom }) => ({
    paddingBottom: `${ratio * 100}%`,
    marginBottom,
  }),
);

ImageWrapper.displayName = 'ImageWrapper';
ImageWrapper.defaultProps = {
  ratio:        1,
  marginBottom: '0',
};

const ImageSource = glamorous.img({
  ...positionAbsolute(),
  objectFit:  'cover',
  transition: 'inherit',
  '&:hover':  {
    transform: 'scale(1.05)',
  },
});

ImageSource.displayName = 'ImageSource';

// =============================================================================
// Component
// =============================================================================

export default function Image({ src, ...rest }) {
  return (
    <ImageWrapper {...rest}>
      <ImageSource src={src} />
    </ImageWrapper>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
