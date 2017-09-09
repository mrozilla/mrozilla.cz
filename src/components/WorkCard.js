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
import { color, border } from '../utils/styles';

// =============================================================================
// Component
// =============================================================================

export default function WorkCard({
  work: { link, title, tagline, tags, image },
  width,
}) {
  return (
    <Column sm={width} marginBottom="2rem" isStacked>
      <Wiggle>
        <Reveal isBlock>
          <Link
            to={link}
            target={link.includes('http') ? '_blank' : null}
            isBare
          >
            <Image
              src={image}
              ratio={3 / 4}
              marginBottom="2rem"
              borderRadius={border.radius.small}
            />
            <Title
              fontSize="2.5rem"
              color={color.brand.primary}
              textAlign="center"
            >
              {title}
            </Title>
            {tagline &&
              <Subtitle
                fontSize="2.5rem"
                marginBottom="1rem"
                textAlign="center"
              >
                {tagline}
              </Subtitle>}
            <Text fontSize="1.5rem" textAlign="center">
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
