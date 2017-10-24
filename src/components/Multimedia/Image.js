// =============================================================================
// import
// =============================================================================

// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';
import { transition, positionAbsolute } from '../../utils/styles';

// helpers
import { ScrollPosition } from '../../utils/helpers';

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
ImageWrapper.propTypes = {
  ratio:        PropTypes.number,
  borderRadius: PropTypes.string,
  marginBottom: PropTypes.string,
};
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
    transform: scale(${props => props.zoom});
  }
`;

ImageSource.displayName = 'ImageSource';
ImageSource.propTypes = {
  transition: PropTypes.string,
  zoom:       PropTypes.string,
};
ImageSource.defaultProps = {
  transition: transition.short,
};

// =============================================================================
// Component
// =============================================================================

function Image({ src, zoom, ...rest }) {
  return (
    <ScrollPosition>
      {({ wasInViewport }, childRef) => (
        <ImageWrapper innerRef={childRef} {...rest}>
          <ImageSource src={wasInViewport ? src : null} zoom={zoom} />
        </ImageWrapper>
      )}
    </ScrollPosition>
  );
}

Image.propTypes = {
  src:  PropTypes.string.isRequired,
  zoom: PropTypes.string,
};
Image.defaultProps = {
  zoom: '1.00',
};

// =============================================================================
// Export
// =============================================================================

export default Image;
