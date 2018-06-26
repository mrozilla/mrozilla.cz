// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import {
  Main, Section, Subheading, Text,
} from '../components';
import {
  HeroContainer,
  WorksContainer,
  AvailabilityContainer,
  // BlogContainer, // TODO add blog pages
  SEOContainer,
} from '../containers';

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
  },
}) {
  return (
    <Main
      gridTemplate={{
        xs: "'hero' 'based' 'availability' 'work' 'blog'",
        md: "'hero hero' 'based availability' 'work blog' / 1fr 1fr",
      }}
      gridGap="10vh 4rem"
    >
      <SEOContainer seo={meta} />
      <HeroContainer hero={hero} />
      <Section gridArea="based">
        <Subheading>{location.title}</Subheading>
        <Text fontSize="3rem" fontWeight="700">
          {location.text}
        </Text>
      </Section>
      <Section gridArea="availability">
        <Subheading>{availability.title}</Subheading>
        <AvailabilityContainer availability={availability} />
      </Section>
      <Section gridArea="work" id="work">
        <Subheading>latest client work</Subheading>
        <WorksContainer works={works.map(({ node: { meta: work } }) => work)} />
      </Section>
      {/* <Section gridArea="blog" id="blog">
        <Subheading>latest blog articles</Subheading>
        <BlogContainer posts={posts} />
      </Section> */}
    </Main>
  );
}

export const query = graphql`
  query HomePage {
    pagesJson(meta: { permalink: { eq: "/" } }) {
      meta {
        title
        description
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
