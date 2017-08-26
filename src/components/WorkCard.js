// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Column } from './Layout';
import { Link } from './Navigation';
import { Title, Subtitle, Text, Comma } from './Typography';
import Image from './Image';
import { Reveal, Wiggle } from './Effects';

// Styles
import { color } from '../utils/styles';

// =============================================================================
// Component
// =============================================================================

export default function WorkCard({
  work: { link, title, tagline, tags, image },
  width,
}) {
  return (
    <Column sm={width} style={{ textAlign: 'center' }} isStacked>
      <Wiggle>
        <Reveal isBlock>
          <Link to={link} isBare>
            <Image ratio={3 / 4} marginBottom="1rem" src={image} />
            <Title fontSize="1rem" color={color.brand.primary}>
              {title}
            </Title>
            {tagline &&
              <Subtitle fontSize="1rem" marginBottom="0.5rem">
                {tagline}
              </Subtitle>}
            <Text fontSize="0.6rem" marginBottom="3rem">
              {tags.map(tag =>
                (<Comma key={tag}>
                  {tag}
                </Comma>),
              )}
            </Text>
          </Link>
        </Reveal>
      </Wiggle>
    </Column>
  );
}

WorkCard.propTypes = {
  work: PropTypes.shape({
    link:    PropTypes.string.isRequired,
    title:   PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    tags:    PropTypes.arrayOf(PropTypes.string).isRequired,
    image:   PropTypes.string,
  }).isRequired,
  width: PropTypes.string,
};

WorkCard.defaultProps = {
  work:  { image: null },
  width: '6',
};
