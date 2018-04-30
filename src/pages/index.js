// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import Helmet from 'react-helmet';
import {
  Main,
  Section,
  Subheading,
  Text,
  HeroBlock,
  WorksBlock,
  AvailabilityBlock,
  BlogBlock,
} from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage({
  data: {
    pagesJson: {
      meta,
      body: { hero, location, availability },
    },
    allWorksJson: { edges: works },
    allLabsJson: { edges: labs },
    allMediumPost: { edges: posts },
  },
}) {
  return (
    <Main
      gridTemplateColumns="1fr 1fr"
      gridTemplateAreas="'hero hero' 'based availability' 'work blog' 'lab blog'"
      gridGap="10vh 4rem"
    >
      <Helmet
        title={`mrozilla: ${meta.title}`}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'keywords', content: meta.keywords },
        ]}
      />
      <HeroBlock hero={hero} />
      <Section gridArea="based">
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
      </Section>
      <Section gridArea="availability">
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
      </Section>
      <Section gridArea="work" id="work">
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
      </Section>
      <Section gridArea="lab" id="lab">
        <Subheading
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          latest lab experiments
        </Subheading>
        <WorksBlock works={labs} />
      </Section>
      <Section gridArea="blog" id="blog">
        <Subheading
          fontSize="1.25rem"
          fontWeight="300"
          margin="0"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          latest blog articles
        </Subheading>
        <BlogBlock title="latest blog articles" posts={posts} />
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
    allWorksJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          url
          title
          tags
        }
      }
    }
    allLabsJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          url
          title
          tags
        }
      }
    }
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          # latestPublishedAt
          virtuals {
            subtitle
          }
        }
      }
    }
  }
`;
