// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Ul, Li, Button, P, Collapsible } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/collapsible/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          codeLink
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

function CollapsibleExample({ children }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <Li
      css={`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 0 1rem;
        grid-template: 'title button' 'content content' / 1fr auto;

        padding: 1rem;
        background: hsla(var(--hsl-text), 0.05);
        border-radius: 0.5rem;
      `}
    >
      <P
        as="h2"
        css={`
          grid-area: title;
          align-self: center;

          font-size: 3rem;
        `}
      >
        Title
      </P>
      <Button
        type="button"
        look="primary"
        css={`
          grid-area: button;

          padding: 1rem 2rem;
        `}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        {isCollapsed ? 'Show' : 'Hide'}
      </Button>
      <Collapsible
        css={`
          grid-area: content;

          line-height: 3rem;
        `}
        isCollapsed={isCollapsed}
      >
        <P>{children}</P>
      </Collapsible>
    </Li>
  );
}

CollapsibleExample.propTypes = {
  children: PropTypes.node.isRequired,
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function MasonryPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'collapsible';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: collapsible;
          `}
        >
          <Ul
            css={`
              grid-gap: 1rem;
            `}
          >
            <CollapsibleExample>
              {Array.from({ length: 5 }, () => 'Lorem ipsum dolor sit amet. ')}
            </CollapsibleExample>
            <CollapsibleExample>
              {Array.from({ length: 10 }, () => 'Lorem ipsum dolor sit amet. ')}
            </CollapsibleExample>
            <CollapsibleExample>
              {Array.from({ length: 15 }, () => 'Lorem ipsum dolor sit amet. ')}
            </CollapsibleExample>
          </Ul>
        </Section>
      </Main>
    </RootContainer>
  );
}

MasonryPage.propTypes = pagePropTypes;
