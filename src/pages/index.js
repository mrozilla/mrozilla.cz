// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Helmet from 'react-helmet';
import {
  Main,
  Section,
  Grid,
  Heading,
  Subheading,
  Title,
  Text,
  List,
  Link,
  WorksBlock,
  AvailabilityBlock,
} from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage({
  data: {
    pagesJson: { meta, body: { hero, location, availability } },
    allWorksJson: { edges: works },
  },
}) {
  return (
    <Main>
      <Helmet
        title={`mrozilla: ${meta.title}`}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'keywords', content: meta.keywords },
        ]}
      />
      <Section>
        <Heading
          fontSize="5rem"
          fontWeight="400"
          lineHeight="6rem"
          margin="-1rem 0 10vh 0"
        >
          {hero.title}
        </Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          gridTemplateAreas="'based availability' 'work blog'"
          gridGap="10vh 4rem"
        >
          <Grid.Item gridArea="based">
            <Subheading
              fontSize="1.25rem"
              fontWeight="300"
              margin="0"
              textTransform="uppercase"
              letterSpacing="0.2em"
            >
              {location.title}
            </Subheading>
            <Text fontSize="3rem" fontWeight="700">
              {location.text}
            </Text>
          </Grid.Item>
          <Grid.Item gridArea="availability">
            <Subheading
              fontSize="1.25rem"
              fontWeight="300"
              margin="0"
              textTransform="uppercase"
              letterSpacing="0.2em"
            >
              {availability.title}
            </Subheading>
            <AvailabilityBlock availability={availability} />
          </Grid.Item>
          <Grid.Item gridArea="work" id="work">
            <Subheading
              fontSize="1.25rem"
              fontWeight="300"
              margin="0"
              textTransform="uppercase"
              letterSpacing="0.2em"
            >
              latest client work
            </Subheading>
            <WorksBlock works={works} />
          </Grid.Item>
        </Grid>
      </Section>
    </Main>
  );
}

export const query = graphql`
  query HomePage {
    pagesJson(meta: { permalink: { eq: "/" } }) {
      meta {
        title
        description
        keywords
      }
      body {
        hero {
          title
        }
        location {
          title
          text
        }
        availability {
          title
          text
        }
      }
    }
    allWorksJson(
      filter: { type: { in: ["work"] } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          url
          title
          tags
        }
      }
    }
  }
`;
