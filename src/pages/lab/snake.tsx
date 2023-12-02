import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Button, Text } from "~components";
import { useEventListener, useInterval } from "~utils";

type Direction = "ArrowUp" | "ArrowRight" | "ArrowDown" | "ArrowLeft";
type Board = "." | "s" | "f";

function Snake() {
  const width = 16;
  const height = 16;

  const [isRunning, setIsRunning] = React.useState(false);
  const [speed, setSpeed] = React.useState(0);
  const [board, setBoard] = React.useState<Board[]>(Array(width * height).fill("."));
  const [snake, setSnake] = React.useState([4, 3, 2, 1, 0]);
  const [food, setFood] = React.useState(10);
  const [direction, setDirection] = React.useState<Direction>("ArrowRight");

  const handleReset = () => {
    setSnake([4, 3, 2, 1, 0]);
    setDirection("ArrowRight");
    setIsRunning(true);
    setSpeed(250);
  };

  useEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    if (event.key.includes("Arrow") || event.key === " ") event.preventDefault();
    if (event.key.includes("Arrow")) {
      if (!isRunning) handleReset();
      setDirection(event.key as Direction);
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

      if (keys[direction].check || board[newHead] === "s") {
        setIsRunning(false);
        setSpeed(0);
        return prev;
      }
      if (newHead === food) {
        const emptyIdxs = board.reduce<number[]>(
          (acc, item, i) => (item === "." ? [...acc, i] : acc),
          []
        );
        setFood(emptyIdxs[Math.floor(Math.random() * emptyIdxs.length)]);
        setSpeed((prevSpeed) => prevSpeed - Math.floor(snake.length / 2));
        return [newHead, ...prev];
      }
      return [newHead, ...prev.slice(0, -1)];
    });
  };

  React.useEffect(() => {
    setBoard((prev) => {
      const newBoard = prev.map((_, i) => {
        if (snake.some((idx) => idx === i)) return "s";
        if (i === food) return "f";
        return ".";
      });
      return newBoard;
    });
  }, [snake]);

  useInterval(() => {
    handleTick();
  }, speed);

  const colors = {
    ".": "hsla(var(--hsl-text), 0.1)",
    s: "var(--color-primary)",
    f: "hsla(var(--hsl-success), 0.5)",
  };

  return (
    <>
      <Text>Score: {snake.length}</Text>
      <Text>Speed: {speed || "0"} ms</Text>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${width}, 1fr)`,
          gap: "1px",
          maxWidth: "400px",
          margin: "2rem 0",
        }}
      >
        {board.map((cell, i) => (
          <span key={i} style={{ backgroundColor: colors[cell], paddingBottom: "100%" }} />
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

export default function SnakePage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="A simple implementation of a snake game completely in React hooks & JSX, no canvas element etc. Doesn't work on mobile :("
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/snake.tsx"
        />
        <section>
          <Snake />
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Snake"
      description="A simple implementation of a snake game completely in React hooks & JSX, no canvas element etc. Doesn't work on mobile :("
      permalink="/lab/snake"
      ogImage="/assets/og.png"
    />
  );
};
