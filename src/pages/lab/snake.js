// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, P, Button } from '~components';
import { renderBlocks, useEventListener, useInterval, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/snake/" } } }) {
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

function Snake() {
  const width = 16;
  const height = 16;

  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(null);
  const [board, setBoard] = useState(Array(width * height).fill('.'));
  const [snake, setSnake] = useState([4, 3, 2, 1, 0]);
  const [food, setFood] = useState(10);
  const [direction, setDirection] = useState('ArrowRight');

  const handleReset = () => {
    setSnake([4, 3, 2, 1, 0]);
    setDirection('ArrowRight');
    setIsRunning(true);
    setSpeed(250);
  };

  useEventListener('keydown', (event) => {
    if (event.key.includes('Arrow') || event.key === ' ') event.preventDefault();
    if (event.key.includes('Arrow')) {
      if (!isRunning) handleReset();
      setDirection(event.key);
    }
  });

  const handleTick = () => {
    setSnake((prev) => {
      const head = prev[0];
      const keys = {
        ArrowUp: { move: width * -1, check: head < width },
        ArrowRight: { move: 1, check: head % width === width - 1 },
        ArrowDown: { move: width, check: head >= board.length - width },
        ArrowLeft: { move: -1, check: head % width === 0 },
      };
      const newHead = head + keys[direction].move;

      if (keys[direction].check || board[newHead] === 's') {
        setIsRunning(false);
        setSpeed(null);
        return prev;
      }
      if (newHead === food) {
        const emptyIdxs = board.reduce((acc, item, i) => (item === '.' ? [...acc, i] : acc), []);
        setFood(emptyIdxs[Math.floor(Math.random() * emptyIdxs.length)]);
        setSpeed((prevSpeed) => prevSpeed - Math.floor(snake.length / 2));
        return [newHead, ...prev];
      }
      return [newHead, ...prev.slice(0, -1)];
    });
  };

  useEffect(() => {
    setBoard((prev) => {
      const newBoard = prev.map((cell, i) => {
        if (snake.some((idx) => idx === i)) return 's';
        if (i === food) return 'f';
        return '.';
      });
      return newBoard;
    });
  }, [snake]);

  useInterval(() => {
    handleTick();
  }, speed);

  const colors = {
    '.': 'hsla(var(--hsl-text), 0.1)',
    s: 'var(--color-primary)',
    f: 'hsla(var(--hsl-success), 0.5)',
  };

  return (
    <>
      <P>Score: {snake.length}</P>
      <P>Speed: {speed || '0'} ms</P>
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(${width}, 1fr);
          grid-auto-flow: row;
          grid-gap: 1px;

          max-width: 400px;
          margin: 2rem 0;
        `}
      >
        {board.map((cell, i) => (
          <span
            key={i} // eslint-disable-line react/no-array-index-key
            css={`
              background: ${colors[cell]};
              padding-bottom: 100%;
            `}
          />
        ))}
      </div>
      {!isRunning && (
        <Button look="primary" onClick={handleReset}>
          Start game
        </Button>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function SnakePage({
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
          grid-template: 'hero' 'snake';
          grid-gap: 10vh 1rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: snake;
          `}
        >
          <Snake />
        </Section>
      </Main>
    </RootContainer>
  );
}

SnakePage.propTypes = pagePropTypes;
