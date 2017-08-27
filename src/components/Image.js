// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { transition, positionAbsolute } from '../utils/styles';

// Helpers
import { withScrollPosition } from '../utils/helpers';

// =============================================================================
// Styles
// =============================================================================

const ImageWrapper = styled.figure`
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: ${props => props.borderRadius};
  padding-bottom: ${props => props.ratio * 100}%;
  margin-bottom: ${props => props.marginBottom};
`;

ImageWrapper.displayName = 'ImageWrapper';
ImageWrapper.defaultProps = {
  ratio:        1,
  borderRadius: '0',
  marginBottom: '0',
};

const ImageSource = styled.img`
  ${positionAbsolute};
  object-fit: cover;
  transition: ${props => props.transition};
  &:hover {
    transform: scale(1.05);
  }
`;

ImageSource.displayName = 'ImageSource';
ImageSource.defaultProps = {
  transition: transition.primary.short,
};

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
