// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Button, Lightbox } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/lightbox/" } } }) {
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
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function LightboxPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [isLightbox, setIsLightbox] = React.useState(false);

  const handleLightbox = () => setIsLightbox((prev) => !prev);

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'maze';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        <Button look="primary" onClick={handleLightbox}>
          Open lightbox
        </Button>
        <Lightbox
          isOpen={isLightbox}
          images={[
            'https://images.unsplash.com/photo-1426901403100-9c1c6b77a54a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1426901013385-803d40bd5558?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1461711513774-c78b437a740b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1427847856029-612f5e500306?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1425321442387-141779fb1e57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
          ]}
          onClose={handleLightbox}
        />
      </Main>
    </RootContainer>
  );
}

LightboxPage.propTypes = pagePropTypes;
