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
    allWorkJson: { edges: works },
    // allMediumPost: { edges: posts },
  },
}) {
  return (
    <Main
      gridTemplateColumns="1fr 1fr"
      gridTemplateAreas="'hero hero' 'based availability' 'work blog'"
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
        <Subheading>{location.title}</Subheading>
        <Text fontSize="3rem" fontWeight="700">
          {location.text}
        </Text>
      </Section>
      <Section gridArea="availability">
        <Subheading>{availability.title}</Subheading>
        <AvailabilityBlock availability={availability} />
      </Section>
      <Section gridArea="work" id="work">
        <Subheading>latest client work</Subheading>
        <WorksBlock works={works.map(({ node: { meta: work } }) => work)} />
      </Section>
      <Section gridArea="blog" id="blog">
        <Subheading>latest blog articles</Subheading>
        {/* <BlogBlock posts={posts} /> */}
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
    allWorkJson(sort: { fields: [meta___date], order: DESC }) {
      edges {
        node {
          meta {
            permalink
            title
            tags
          }
        }
      }
    }
  }
`;
