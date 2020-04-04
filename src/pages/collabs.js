// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';

import { Main, Section, H2, Ul, Li, H3, P, Link } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(
      fileAbsolutePath: { regex: "/cms/pages/" }
      frontmatter: { meta: { permalink: { eq: "/collabs/" } } }
    ) {
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
    collaborators: allMdx(
      filter: { fileAbsolutePath: { regex: "/cms/collaborators/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          description
          url
          tags
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CollaboratorsPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
    collaborators,
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'collaborators';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: collaborators;
          `}
        >
          <H2>Collaborators</H2>
          <Ul
            css={`
              grid-gap: 3rem;
            `}
          >
            {collaborators.nodes.map(({ frontmatter }) => (
              <Li key={frontmatter.url}>
                <H3
                  css={`
                    font-size: 3rem;
                    line-height: 4rem;
                  `}
                >
                  <Link to={frontmatter.url} look="tertiary">
                    {frontmatter.title}
                  </Link>
                </H3>
                <P
                  css={`
                    opacity: 0.75;
                    font-size: 1.5rem;
                    line-height: 2rem;
                  `}
                >
                  {frontmatter.description}
                </P>
              </Li>
            ))}
          </Ul>
        </Section>
      </Main>
    </RootContainer>
  );
}

CollaboratorsPage.propTypes = pagePropTypes;
