// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';
import { shape, number } from 'prop-types';

import { keyframes } from 'styled-components';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Button, Ul, Li, Form, Input } from '~components';
import { renderBlocks, useMaze, useEventListener, pagePropTypes } from '~utils';

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

const revealAnimation = ({ width, height }) => keyframes`
  from {
    transform: scale(1,1) translate(${(width - 1) * 100}%, ${(height - 1) * 100}%);
    transform-origin: ${width * 100}% ${height * 100}%;
  }
  50% {
    transform: scale(${width},${height}) translate(${(width - 1) * 100}%, ${(height - 1) * 100}%);
    transform-origin: ${width * 100}% ${height * 100}%;
  }
  50.001% {
    transform: scale(${width},${height}) translate(0,0);
    transform-origin: 0 0;
  }
  to {
    transform: scale(1,1) translate(0,0);
    transform-origin: 0 0;
  }
`;

function Revealer({ size }) {
  return (
    <div
      css={`
        position: absolute;
        width: calc(100% / ${size.width});
        height: calc(100% / ${size.height});
        background: hsla(var(--hsl-primary), 1);

        animation: ${revealAnimation(size)} 1000ms alternate forwards;
      `}
    />
  );
}
Revealer.propTypes = {
  size: shape({
    width: number.isRequired,
    height: number.isRequired,
  }).isRequired,
};

function Maze() {
  const [size, setSize] = React.useState({
    width: 10,
    height: 10,
  });

  const [maze, generateMaze] = useMaze(size.width, size.height);
  const [playerIdx, setPlayerIdx] = React.useState(0);
  const [isTransition, setIsTransition] = React.useState(false);

  const handleSizeChange = ({ target }) => {
    setSize((prev) => ({ ...prev, [target.name]: Number(target.value) }));
  };

  React.useEffect(() => {
    generateMaze(size.width, size.height);
  }, [size, generateMaze]);

  React.useEffect(() => {
    if (playerIdx === size.width * size.height - 1) {
      setIsTransition(true);
      setTimeout(() => {
        generateMaze(size.width, size.height);
        setPlayerIdx(0);
      }, 500);
      setTimeout(() => {
        setIsTransition(false);
      }, 1000);
    }
  }, [playerIdx, size, generateMaze]);

  const handleUpdatePlayerPosition = (direction) => {
    const currentCell = maze[playerIdx];
    const keys = {
      ArrowUp: {
        move: size.width * -1,
        check: playerIdx >= size.width && !currentCell.top,
      },
      ArrowRight: {
        move: 1,
        check: playerIdx % size.width !== size.width - 1 && !currentCell.right,
      },
      ArrowDown: {
        move: size.width,
        check: playerIdx < maze.length - size.width && !currentCell.bottom,
      },
      ArrowLeft: {
        move: -1,
        check: playerIdx % size.width !== 0 && !currentCell.left,
      },
    };
    if (keys[direction].check) setPlayerIdx((prev) => prev + keys[direction].move);
  };

  useEventListener('keydown', (event) => {
    if (event.key.includes('Arrow')) {
      event.preventDefault();
      handleUpdatePlayerPosition(event.key);
    }
  });

  return (
    <Section
      css={`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 2rem;
      `}
    >
      <Ul
        css={`
          display: grid;
          grid-template-columns: repeat(${size.width}, 1fr);

          position: relative;
          margin: 0 0 0 0.5rem;

          --border-width: 1rem;
        `}
      >
        {maze.map(({ top, right, bottom, left }, idx) => {
          function getBackgroundColor() {
            if (playerIdx === idx) return 'hsla(var(--hsl-primary), 0.5)';
            if (idx === maze.length - 1) return 'hsla(var(--hsl-success),0.25)';
            return null;
          }

          return (
            <Li
              key={idx} // eslint-disable-line react/no-array-index-key
              css={`
                position: relative;
                background: ${getBackgroundColor()};
                z-index: ${playerIdx === idx && '-1'};

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
          );
        })}
        {isTransition && <Revealer size={size} />}
      </Ul>
      <Form
        css={`
          grid-template: 'width' 'height' 'button';
          align-content: start;
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
        />
        <Button
          type="button"
          look="primary"
          onClick={() => generateMaze()}
          css={`
            grid-area: 'button';
          `}
        >
          Regenerate
        </Button>
      </Form>
    </Section>
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
        <Maze />
      </Main>
    </RootContainer>
  );
}

MazePage.propTypes = pagePropTypes;
