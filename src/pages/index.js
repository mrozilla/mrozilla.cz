// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer,
  HeroContainer,
  WorksContainer,
  AvailabilityContainer,
  BlogPreviewsContainer,
  SEOContainer } from '~containers';

import { Main, Section, H2, P } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/" } }) {
      ...MetaFragment
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
          dateISOString
        }
      }
    }
    works: allWorkJson(sort: { fields: [meta___date], order: DESC }) {
      edges {
        node {
          ...WorkFragment
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...BlogPreviewFragment
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage({
  data: {
    page: {
      meta,
      body: { hero, location, availability },
    },
    works,
    posts,
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'based' 'availability' 'work' 'blog'",
          md: "'hero hero' 'based availability' 'work blog'",
        }}
        gridGap="10vh 4rem"
      >
        <HeroContainer title={hero.title} />
        <Section gridArea="based">
          <H2>{location.title}</H2>
          <P fontSize="3rem">{location.text}</P>
        </Section>
        <Section gridArea="availability">
          <H2>{availability.title}</H2>
          <AvailabilityContainer availabilityDate={new Date(availability.dateISOString)} />
        </Section>
        <Section gridArea="work" id="work">
          <H2>latest client work</H2>
          <WorksContainer
            works={works.edges.map(({ node: { meta: { permalink }, body } }) => ({
              permalink,
              ...body,
            }))}
          />
        </Section>
        <Section gridArea="blog" id="blog">
          <H2>latest blog articles</H2>
          <BlogPreviewsContainer
            posts={posts.edges.map(({ node: { frontmatter: post } }) => ({
              ...post,
            }))}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
