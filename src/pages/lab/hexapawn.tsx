import React from "react";
import { noop, sample } from "lodash";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Button, Heading, Group } from "~components";

import * as styles from "~components/snowflakes/hexapawn.module.scss";

// Hexapawn was first described in an article by Martin Gardner in Scientific American in 1962
// http://cs.williams.edu/~freund/cs136-073/GardnerHexapawn.pdf

type Figure = {
  id: number;
  x: number;
  y: number;
  figure: "♟" | "♙";
};

type Move = {
  x: number;
  y: number;
};

type AImove = {
  id: number;
  board: string;
  move: [number, string];
};

function Pawn({
  pawn,
  isSelected = false,
  onSelect = noop,
  ...rest
}: {
  pawn: Figure;
  disabled?: boolean;
  isSelected?: boolean;
  onSelect?: (id: number) => void;
}) {
  return (
    <Button
      look="tertiary"
      className={styles.pawn}
      style={{
        transform: `translateX(calc(100% * ${pawn.x - 1})) translateY(calc(100% * ${pawn.y - 1}))`,
        cursor: onSelect !== noop ? "pointer" : undefined,
        color: isSelected ? "var(--color-primary)" : undefined,
        pointerEvents: pawn.figure === "♟" ? "none" : undefined,
      }}
      onClick={() => onSelect(pawn.id)}
      {...rest}
    >
      {`${pawn.figure}\u{fe0e}`}
    </Button>
  );
}

function Move({
  move,
  onMove = noop,
  ...rest
}: {
  move: Move;
  disabled?: boolean;
  onMove: (move: Move) => void;
}) {
  return (
    <Button
      style={{ gridColumn: move.x, gridRow: move.y }}
      onClick={() => onMove(move)}
      {...rest}
    />
  );
}

const enemyDefault: Figure[] = [
  { id: 1, x: 1, y: 1, figure: "♟" },
  { id: 2, x: 2, y: 1, figure: "♟" },
  { id: 3, x: 3, y: 1, figure: "♟" },
];
const playerDefault: Figure[] = [
  { id: 4, x: 1, y: 3, figure: "♙" },
  { id: 5, x: 2, y: 3, figure: "♙" },
  { id: 6, x: 3, y: 3, figure: "♙" },
];
const AIdefault: AImove[] = [
  // 1
  { id: 0, board: "eeep...pp", move: [2, "12"] },
  { id: 1, board: "eeep...pp", move: [2, "22"] },
  { id: 2, board: "eeep...pp", move: [3, "32"] },
  { id: 3, board: "eee..ppp.", move: [1, "12"] },
  { id: 4, board: "eee..ppp.", move: [2, "22"] },
  { id: 5, board: "eee..ppp.", move: [2, "32"] },
  // 2
  { id: 6, board: "eee.p.p.p", move: [1, "12"] },
  { id: 7, board: "eee.p.p.p", move: [1, "22"] },
  { id: 8, board: "eee.p.p.p", move: [3, "22"] },
  { id: 9, board: "eee.p.p.p", move: [3, "32"] },
  // 3
  { id: 10, board: "e.eep...p", move: [1, "22"] },
  { id: 11, board: "e.eep...p", move: [3, "22"] },
  { id: 12, board: "e.eep...p", move: [3, "32"] },
  { id: 13, board: "e.eep...p", move: [2, "13"] },
  { id: 14, board: "e.e.pep..", move: [1, "12"] },
  { id: 15, board: "e.e.pep..", move: [1, "22"] },
  { id: 16, board: "e.e.pep..", move: [3, "22"] },
  { id: 17, board: "e.e.pep..", move: [2, "33"] },
  // 4
  { id: 18, board: ".eepe...p", move: [2, "12"] },
  { id: 19, board: ".eepe...p", move: [3, "32"] },
  { id: 20, board: ".eepe...p", move: [1, "23"] },
  { id: 21, board: ".eepe...p", move: [1, "33"] },
  { id: 22, board: "ee..epp..", move: [1, "12"] },
  { id: 23, board: "ee..epp..", move: [2, "32"] },
  { id: 24, board: "ee..epp..", move: [3, "13"] },
  { id: 25, board: "ee..epp..", move: [3, "23"] },
  // 5
  { id: 26, board: "e.epp..p.", move: [1, "22"] },
  { id: 27, board: "e.epp..p.", move: [3, "22"] },
  { id: 28, board: "e.epp..p.", move: [3, "32"] },
  { id: 29, board: "e.e.pp.p.", move: [1, "12"] },
  { id: 30, board: "e.e.pp.p.", move: [1, "22"] },
  { id: 31, board: "e.e.pp.p.", move: [3, "22"] },
  // 6
  { id: 32, board: "ee.p.p..p", move: [2, "12"] },
  { id: 33, board: "ee.p.p..p", move: [2, "22"] },
  { id: 34, board: "ee.p.p..p", move: [2, "32"] },
  { id: 35, board: ".eep.pp..", move: [2, "32"] },
  { id: 36, board: ".eep.pp..", move: [2, "32"] },
  { id: 37, board: ".eep.pp..", move: [2, "32"] },
  // 7
  { id: 38, board: ".ee.epp..", move: [2, "32"] },
  { id: 39, board: ".ee.epp..", move: [1, "13"] },
  { id: 40, board: ".ee.epp..", move: [1, "23"] },
  { id: 41, board: "ee.pe...p", move: [2, "12"] },
  { id: 42, board: "ee.pe...p", move: [3, "23"] },
  { id: 43, board: "ee.pe...p", move: [3, "33"] },
  // 8
  { id: 44, board: ".eeeppp..", move: [2, "32"] },
  { id: 45, board: ".eeeppp..", move: [3, "22"] },
  { id: 46, board: "ee.ppe..p", move: [1, "22"] },
  { id: 47, board: "ee.ppe..p", move: [2, "12"] },
  // 9
  { id: 48, board: "e.ee.p.p.", move: [2, "13"] },
  { id: 49, board: "e.ee.p.p.", move: [2, "23"] },
  { id: 50, board: "e.ep.e.p.", move: [2, "23"] },
  { id: 51, board: "e.ep.e.p.", move: [2, "33"] },
  // 10
  { id: 52, board: ".ee.p...p", move: [3, "22"] },
  { id: 53, board: ".ee.p...p", move: [3, "32"] },
  { id: 54, board: "ee..p.p..", move: [1, "12"] },
  { id: 55, board: "ee..p.p..", move: [1, "22"] },
  // 11
  { id: 56, board: ".ee.p.p..", move: [3, "22"] },
  { id: 57, board: ".ee.p.p..", move: [3, "32"] },
  { id: 58, board: "ee..p...p", move: [1, "12"] },
  { id: 59, board: "ee..p...p", move: [1, "22"] },
  // 12
  { id: 60, board: "e.ep....p", move: [3, "32"] },
  { id: 61, board: "e.e..pp..", move: [1, "12"] },
  // 13
  { id: 62, board: "..eeep...", move: [2, "13"] },
  { id: 63, board: "..eeep...", move: [1, "23"] },
  { id: 64, board: "e..pee...", move: [3, "23"] },
  { id: 65, board: "e..pee...", move: [2, "33"] },
  // 14
  { id: 66, board: "e..ppp...", move: [1, "22"] },
  { id: 67, board: ".eeppp...", move: [3, "22"] },
  // 15
  { id: 68, board: ".e.epp...", move: [2, "32"] },
  { id: 69, board: ".e.epp...", move: [1, "13"] },
  { id: 70, board: ".e.ppe...", move: [2, "12"] },
  { id: 71, board: ".e.ppe...", move: [3, "33"] },
  // 16
  { id: 72, board: "e..eep...", move: [2, "13"] },
  { id: 73, board: "e..eep...", move: [3, "23"] },
  { id: 74, board: "..epee...", move: [1, "23"] },
  { id: 75, board: "..epee...", move: [2, "33"] },
  // 17
  { id: 76, board: "..eep....", move: [3, "22"] },
  { id: 77, board: "..eep....", move: [3, "32"] },
  { id: 78, board: "..eep....", move: [2, "13"] },
  { id: 79, board: "e..pe....", move: [1, "12"] },
  { id: 80, board: "e..pe....", move: [1, "22"] },
  { id: 81, board: "e..pe....", move: [2, "33"] },
  // 18
  { id: 82, board: ".e.pe....", move: [2, "12"] },
  { id: 83, board: ".e.pe....", move: [1, "23"] }, // TODO: test if 1 exists here
  { id: 84, board: ".e..ep...", move: [2, "32"] },
  { id: 85, board: ".e..ep...", move: [1, "23"] }, // TODO: test if 1 exists here
  // 19
  { id: 86, board: "e..ep....", move: [1, "22"] },
  { id: 87, board: "e..ep....", move: [2, "13"] },
  { id: 88, board: "..e.pe...", move: [3, "22"] },
  { id: 89, board: "..e.pe...", move: [2, "33"] },
];

function Hexapawn() {
  const [AI, setAI] = React.useState(AIdefault);
  const [lastMoveId, setLastMoveId] = React.useState(-1);
  const [player, setPlayer] = React.useState(playerDefault);
  const [enemy, setEnemy] = React.useState(enemyDefault);
  const [selectedId, setSelectedId] = React.useState(-1);
  const [validMoves, setValidMoves] = React.useState<Move[]>([]);
  const [stats, setStats] = React.useState({
    victories: 0,
    defeats: 0,
    lastVictory: "",
  });

  const [turn, setTurn] = React.useState("player");

  const getValidMoves = (id: number) => {
    const { x, y } = player.find((pawn) => pawn.id === id)!;
    const isAhead = enemy.find((pawn) => pawn.x === x && pawn.y === y - 1);
    const isAheadLeft = enemy.find((pawn) => pawn.x === x - 1 && pawn.y === y - 1);
    const isAheadRight = enemy.find((pawn) => pawn.x === x + 1 && pawn.y === y - 1);

    return [
      ...(isAhead ? [] : [{ x, y: y - 1 }]),
      ...(isAheadLeft ? [{ x: x - 1, y: y - 1 }] : []),
      ...(isAheadRight ? [{ x: x + 1, y: y - 1 }] : []),
    ];
  };

  const handleSelect = (id: number) => {
    setSelectedId(id);
    if (id > -1) setValidMoves(getValidMoves(id));
  };

  const handleMove = (move: Move) => {
    setPlayer((prev) => prev.map((pawn) => (pawn.id === selectedId ? { ...pawn, ...move } : pawn)));
    setValidMoves([]);
    setSelectedId(-1);
    setEnemy((prev) => prev.filter((pawn) => pawn.x !== move.x || pawn.y !== move.y));
    setTurn("enemy");
  };

  const handleReset = () => {
    setPlayer(playerDefault);
    setEnemy(enemyDefault);
    setTurn("player");
  };

  const handleWin = () => {
    setAI((prev) => prev.filter((move) => move.id !== lastMoveId));
    setStats((prev) => ({ ...prev, victories: prev.victories + 1, lastVictory: "Player" }));
    setTurn("end");
  };

  const handleDefeat = () => {
    setStats((prev) => ({ ...prev, defeats: prev.defeats + 1, lastVictory: "AI" }));
    setTurn("end");
  };

  const handleEnemy = () => {
    const currentBoard = [...player, ...enemy]
      .reduce(
        (acc, item) => {
          acc[item.x - 1 + 3 * (item.y - 1)] = item.id < 4 ? "e" : "p";
          return acc;
        },
        Array.from({ length: 9 }, () => ".")
      )
      .join("");

    const moves = AI.filter(({ board }) => board === currentBoard);
    if (moves.length === 0) return handleWin();

    const {
      id: moveId,
      move: [id, xy],
    } = sample(moves)!;

    setLastMoveId(moveId);
    setEnemy((prev) =>
      prev.map((pawn) => (pawn.id === id ? { ...pawn, x: +xy.charAt(0), y: +xy.charAt(1) } : pawn))
    );
    setPlayer((prev) =>
      prev.filter((pawn) => pawn.x !== +xy.charAt(0) || pawn.y !== +xy.charAt(1))
    );
    return setTurn("player");
  };

  React.useEffect(() => {
    if (turn === "enemy") {
      if (player.some((pawn) => pawn.y === 1) || enemy.length === 0) {
        handleWin();
        return;
      }
      setTimeout(() => handleEnemy(), 250);
    }
    if (turn === "player") {
      if (
        enemy.some((pawn) => pawn.y === 3) ||
        player.length === 0 ||
        player.every((pawn) => getValidMoves(pawn.id).length === 0)
      ) {
        handleDefeat();
      }
    }
  }, [turn]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
        gridGap: "4rem 0",
      }}
    >
      <section>
        <div className={styles.board}>
          {enemy.map((pawn) => (
            <Pawn key={pawn.id} pawn={pawn} />
          ))}
          {player.map((pawn) => (
            <Pawn
              key={pawn.id}
              pawn={pawn}
              isSelected={selectedId === pawn.id}
              onSelect={handleSelect}
              disabled={turn === "end"}
            />
          ))}
          {validMoves.map((move) => (
            <Move
              key={`${move.x}${move.y}`}
              move={move}
              onMove={handleMove}
              disabled={turn === "end"}
            />
          ))}
        </div>
        {__DEV__ && <p>{__DEV__ && `${AI.length} / ${AIdefault.length}`}</p>}
        <p>
          {stats.victories} / {stats.victories + stats.defeats} victories
        </p>
        <p>Last victory: {stats.lastVictory}</p>
        {turn === "end" && (
          <Button look="primary" disabled={turn !== "end"} onClick={handleReset}>
            Next round
          </Button>
        )}
        {__DEV__ && (
          <Group>
            <Button
              onClick={() => {
                handleDefeat();
                handleReset();
              }}
            >
              Give up
            </Button>
            <Button
              onClick={() => {
                handleWin();
                handleReset();
              }}
            >
              Win
            </Button>
          </Group>
        )}
      </section>
      <aside style={{ fontSize: "1.75rem", lineHeight: "3rem" }}>
        <Heading tag="h2">How to play</Heading>
        <ul style={{ listStyle: "disc", padding: "0 0 2rem 1em" }}>
          <li>You play white, the AI plays black</li>
          <li>White always starts</li>
          <li>
            On your turn, there are two types of valid moves:{" "}
            <ol style={{ listStyle: "lower-roman", padding: "0 0 0 1em" }}>
              <li>Move one of your pawns 1 square straight ahead if free</li>
              <li>
                Move one of your pawns 1 square diagonally ahead if occupied by the opponent and
                capture the piece
              </li>
            </ol>
          </li>
          <li>
            The game is won in one of three ways:{" "}
            <ol style={{ listStyle: "lower-roman", padding: "0 0 0 1em" }}>
              <li>Moving a pawn to the opposite end of the board</li>
              <li>Capturing all enemy pawns</li>
              <li>Achieving a position in which the enemy can&apos;t move</li>
            </ol>
          </li>
        </ul>
        <Heading tag="h2">About the AI</Heading>
        <ul style={{ listStyle: "disc", padding: "0 0 0 1em" }}>
          <li>The AI makes random (valid) moves in response to yours</li>
          <li>These moves feel silly and wrong in the beginning</li>
          <li>
            When making a move that leads to losing, the AI won&apos;t do it again (until you
            refresh the browser)
          </li>
          <li>Very quickly, the AI becomes scarily good at the game</li>
        </ul>
      </aside>
    </section>
  );
}

export default function HexapawnPage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="Hexapawn demonstrates how an artificial intelligence can learn to play a minimalist chess game"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/hexapawn.tsx"
        />
        <Hexapawn />
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Hexapawn"
      description="Hexapawn demonstrates how an artificial intelligence can learn to play a minimalist chess game"
      permalink="/lab/hexapawn"
      ogImage="/assets/og.png"
    />
  );
};
