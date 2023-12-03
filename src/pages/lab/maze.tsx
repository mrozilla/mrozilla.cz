import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Button, TextInput } from "~components";
import { useMaze, useEventListener } from "~utils";

import * as styles from "~components/snowflakes/maze.module.scss";

const Maze = () => {
  const [size, setSize] = React.useState({ width: 10, height: 10 });
  const [maze, generateMaze] = useMaze(size.width, size.height);
  const [playerIdx, setPlayerIdx] = React.useState(0);
  const [isTransitioning, setTransitioning] = React.useState(false);

  const handleSizeChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setSize((prev) => ({ ...prev, [target.name]: Number(target.value) }));
  };

  React.useEffect(() => {
    generateMaze(size.width, size.height);
  }, [size, generateMaze]);

  React.useEffect(() => {
    if (playerIdx === size.width * size.height - 1) {
      setTransitioning(true);
      setTimeout(() => {
        generateMaze(size.width, size.height);
        setPlayerIdx(0);
      }, 500);
      setTimeout(() => {
        setTransitioning(false);
      }, 1000);
    }
  }, [playerIdx, size, generateMaze]);

  const handleUpdatePlayerPosition = (direction: string) => {
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
    const key = keys[direction as keyof typeof keys];
    if (key.check) setPlayerIdx((prev) => prev + key.move);
  };

  useEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key.includes("Arrow")) {
      event.preventDefault();
      handleUpdatePlayerPosition(event.key);
    }
  });

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
      }}
    >
      <ul
        style={
          {
            display: "grid",
            gridTemplateColumns: `repeat(${size.width}, 1fr)`,
            position: "relative",
            margin: "0 0 0 0.5rem",
            "--border-width": "1rem",
          } as React.CSSProperties
        }
      >
        {maze.map(({ top, right, bottom, left }, idx) => {
          function getBackgroundColor() {
            if (playerIdx === idx) return "hsla(var(--hsl-primary), 0.5)";
            if (idx === maze.length - 1) return "hsla(var(--hsl-success),0.25)";
            return undefined;
          }

          return (
            <li
              key={idx} // eslint-disable-line react/no-array-index-key
              className={styles.cell}
              style={
                {
                  backgroundColor: getBackgroundColor(),
                  zIndex: playerIdx === idx ? "-1" : undefined,
                  "--border-top-width": top ? "var(--border-width)" : "0px",
                  "--border-right-width": right ? "var(--border-width)" : "0px",
                  "--border-bottom-width": bottom ? "var(--border-width)" : "0px",
                  "--border-left-width": left ? "var(--border-width)" : "0px",
                } as React.CSSProperties
              }
            />
          );
        })}
        {isTransitioning && (
          <div
            className={styles.revealer}
            style={{ "--width": size.width, "--height": size.height } as React.CSSProperties}
          />
        )}
      </ul>
      <form>
        <TextInput
          type="number"
          name="width"
          value={size.width}
          label="Width"
          onChange={handleSizeChange}
        />
        <TextInput
          type="number"
          name="height"
          value={size.height}
          label="Height"
          onChange={handleSizeChange}
        />
        <Button type="button" look="primary" onClick={() => generateMaze()}>
          Regenerate
        </Button>
      </form>
    </section>
  );
};

export default function MazePage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="A simple implementation of maze generation completely in React hooks & JSX, no canvas element etc.—use arrow keys on desktop to solve the maze"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/maze.tsx"
        />
        <Maze />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Maze generation"
      description="A simple implementation of maze generation completely in React hooks & JSX, no canvas element etc.—use arrow keys on desktop to solve the maze"
      permalink="/lab/maze"
      ogImage="/assets/og.png"
    />
  );
};
