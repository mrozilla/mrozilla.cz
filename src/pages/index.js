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
    page: mdx(frontmatter: { meta: { permalink: { eq: "/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          text
          date
          type
        }
      }
    }
    works: allMdx(
      filter: { fields: { sourceName: { eq: "works" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            meta {
              permalink
              tags
            }
          }
        }
      }
    }
    posts: allMdx(
      filter: { fields: { sourceName: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            permalink
            date(formatString: "MMMM D, YYYY")
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
      frontmatter: { meta, blocks },
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
          xs: "'hero' 'location' 'availability' 'work' 'blog'",
          md: "'hero hero' 'location availability' 'work blog'",
        }}
        gridGap="10vh 4rem"
      >
        {blocks.map((block) => {
          if (block.type === 'hero') {
            return <HeroContainer key={block.title} title={block.title} />;
          }
          if (block.type === 'location') {
            return (
              <Section key={block.title} gridArea="location">
                <H2>{block.title}</H2>
                <P fontSize="3rem">{block.text}</P>
              </Section>
            );
          }
          if (block.type === 'availability') {
            return (
              <Section key={block.title} gridArea="availability">
                <H2>{block.title}</H2>
                <AvailabilityContainer availabilityDate={new Date(block.date)} />
              </Section>
            );
          }
          return null;
        })}
        <Section gridArea="work" id="work">
          <H2>latest client work</H2>
          <WorksContainer
            works={works.edges.map(
              ({
                node: {
                  frontmatter: {
                    title,
                    meta: { permalink, tags },
                  },
                },
              }) => ({
                title,
                permalink,
                tags,
              }),
            )}
          />
        </Section>
        <Section gridArea="blog" id="blog">
          <H2>latest blog articles</H2>
          <BlogPreviewsContainer
            posts={posts.edges.map(({ node: { frontmatter } }) => ({
              ...frontmatter,
            }))}
          />
        </Section>
      </Main>
    </RootContainer>
  );
}
