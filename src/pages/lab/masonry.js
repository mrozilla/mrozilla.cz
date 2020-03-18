// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Masonry, Img, Form, Input } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/masonry/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

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
  const [columns, setColumns] = React.useState(3);

  const handleChange = ({ target: { value } }) => {
    setColumns(Number.parseInt(value, 10));
  };

  const imageSrc = 'https://source.unsplash.com/random/400x400';

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'form' 'masonry';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        <Form
          css={`
            grid-area: form;

            grid-template: 'columns';
          `}
        >
          <Input
            type="number"
            name="columns"
            label="Amount of columns"
            value={columns}
            onChange={handleChange}
          />
        </Form>
        <Section
          css={`
            grid-area: masonry;
          `}
        >
          <Masonry columns={columns}>
            {Array.from({ length: columns * 4 }, (_, i) => i).map((order) => (
              <Img key={order} ratio={Math.random() + 0.5} src={imageSrc} alt="a random photo" />
            ))}
          </Masonry>
        </Section>
      </Main>
    </RootContainer>
  );
}

MasonryPage.propTypes = pagePropTypes;
