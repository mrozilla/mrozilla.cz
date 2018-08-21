// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, Subheading, Text,
} from '../components';
import {
  LayoutContainer,
  HeroContainer,
  WorksContainer,
  AvailabilityContainer,
  BlogPreviewsContainer,
  SEOContainer,
} from '../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: pagesJson(meta: { permalink: { eq: "/" } }) {
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
    works: allWorkJson(sort: { fields: [meta___date], order: DESC }) {
      edges {
        node {
          meta {
            permalink
          }
          body {
            title
            tagline
          }
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
          frontmatter {
            permalink
            title
          }
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
      meta: seo,
      body: { hero, location, availability },
    },
    works,
    posts,
  },
}) {
  return (
    <LayoutContainer>
      <Main
        gridTemplate={{
          xs: "'hero' 'based' 'availability' 'work' 'blog'",
          md: "'hero hero' 'based availability' 'work blog' / 1fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer {...{ seo }} />
        <HeroContainer title={hero.title} />
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
          <WorksContainer
            works={works.edges.map(({ node: { meta, body } }) => ({
              ...meta,
              ...body,
            }))}
          />
        </Section>
        <Section gridArea="blog" id="blog">
          <Subheading>latest blog articles</Subheading>
          <BlogPreviewsContainer
            posts={posts.edges.map(({ node: { frontmatter: post } }) => ({
              ...post,
            }))}
          />
        </Section>
      </Main>
    </LayoutContainer>
  );
}
