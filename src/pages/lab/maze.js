// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Button, Ul, Li, Form, Input } from '~components';
import { renderBlocks, useMaze } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/maze/" } } }) {
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
// helpers
// ─────────────────────────────────────────────────────────────────────────────

function Maze() {
  const [size, setSize] = React.useState({
    width: 20,
    height: 20,
  });

  const [maze, generateMaze] = useMaze();

  // const handleSizeChange = ({ target }) => {
  //   setSize((prev) => ({ ...prev, [target.name]: Number(target.value) }));
  // };

  // React.useEffect(() => {
  //   generateMaze(size);
  // }, [size.width, size.height]);

  return (
    <>
      {/* <Form
        css={`
          grid-template: 'width height button';
        `}
      >
        <Input
          type="number"
          name="width"
          value={size.width}
          label="Width"
          onChange={handleSizeChange}
        />
        <Input
          type="number"
          name="height"
          value={size.height}
          label="Height"
          onChange={handleSizeChange}
        /> */}
      <Button
        type="button"
        look="primary"
        onClick={() => generateMaze()}
        css={`
          grid-area: 'button';
        `}
      >
        Generate maze
      </Button>
      {/* </Form> */}
      <Ul
        css={`
          display: grid;
          grid-template-columns: repeat(${size.width}, 1fr);

          padding: 2rem 5px 0;
          max-width: 500px;
        `}
      >
        {maze.map(({ top, right, bottom, left }, idx) => (
          <Li
            key={idx} // eslint-disable-line react/no-array-index-key
            css={`
              --border-width: 1rem;

              position: relative;

              &::before {
                content: '';
                display: block;
                padding-bottom: 100%;
              }

              &::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;

                margin: calc(var(--border-width) * -0.5);

                border: var(--border-width) solid var(--color-primary);
                border-top-width: ${top ? 'var(--border-width)' : '0px'};
                border-right-width: ${right ? 'var(--border-width)' : '0px'};
                border-bottom-width: ${bottom ? 'var(--border-width)' : '0px'};
                border-left-width: ${left ? 'var(--border-width)' : '0px'};
              }
            `}
          />
        ))}
      </Ul>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function MazePage({
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
          grid-template: 'hero' 'maze';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: maze;
          `}
        >
          <Maze />
        </Section>
      </Main>
    </RootContainer>
  );
}
