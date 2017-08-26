// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { border, transition, positionAbsolute } from '../utils/styles';

// Helpers
import { withScrollPosition } from '../utils/helpers';

// =============================================================================
// Styles
// =============================================================================

const ImageWrapper = glamorous.figure(
  {
    position:        'relative',
    overflow:        'hidden',
    backgroundColor: 'white',
    borderRadius:    border.radius.small,
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

function Image({ src, wasInViewport, ...rest }) {
  return (
    <ImageWrapper {...rest}>
      <ImageSource src={wasInViewport ? src : null} />
    </ImageWrapper>
  );
}

Image.propTypes = {
  src:           PropTypes.string.isRequired,
  wasInViewport: PropTypes.bool.isRequired,
};

// =============================================================================
// Export
// =============================================================================

export default withScrollPosition(Image);
