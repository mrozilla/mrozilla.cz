// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import sample from 'lodash/sample';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, View, Button } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/hexapawn/" } } }) {
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

function Pawn({ pawn, isSelected, onSelect, ...rest }) {
  return (
    <Button
      css={`
        position: absolute;
        width: var(--grid);
        height: var(--grid);
        transform: translateX(calc(100% * ${pawn.x - 1})) translateY(calc(100% * ${pawn.y - 1})) !important;
        line-height: 2rem;
        transition: transform 250ms;

        display: grid;
        place-items: center;
        font-size: 8rem;
        cursor: ${onSelect && 'pointer'};
        color: ${isSelected && 'var(--color-primary)'};
        pointer-events: ${pawn.figure === '♟' && 'none'};
      `}
      onClick={() => onSelect(pawn.id)}
      {...rest}
    >
      {pawn.figure}
    </Button>
  );
}

Pawn.propTypes = {
  pawn: PropTypes.shape({
    id: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    figure: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
Pawn.defaultProps = {
  isSelected: false,
  onSelect: () => {},
};

function Move({ move, onMove, ...rest }) {
  return (
    <Button
      css={`
        grid-column: ${move.x};
        grid-row: ${move.y};
        z-index: 1;

        cursor: pointer;
        box-shadow: inset 0 0 0 2px hsla(var(--hsl-primary), 0.5);
      `}
      onClick={() => onMove(move)}
      {...rest}
    />
  );
}

const enemyDefault = [
  { id: 1, x: 1, y: 1, figure: '♟' },
  { id: 2, x: 2, y: 1, figure: '♟' },
  { id: 3, x: 3, y: 1, figure: '♟' },
];
const playerDefault = [
  { id: 4, x: 1, y: 3, figure: '♙' },
  { id: 5, x: 2, y: 3, figure: '♙' },
  { id: 6, x: 3, y: 3, figure: '♙' },
];
const AIdefault = [
  // 1
  { id: 0, board: 'eeep...pp', move: [2, '12'] },
  { id: 1, board: 'eeep...pp', move: [2, '22'] },
  { id: 2, board: 'eeep...pp', move: [3, '32'] },
  { id: 3, board: 'eee..ppp.', move: [1, '12'] },
  { id: 4, board: 'eee..ppp.', move: [2, '22'] },
  { id: 5, board: 'eee..ppp.', move: [2, '32'] },
  // 2
  { id: 6, board: 'eee.p.p.p', move: [1, '12'] },
  { id: 7, board: 'eee.p.p.p', move: [1, '22'] },
  { id: 8, board: 'eee.p.p.p', move: [3, '22'] },
  { id: 9, board: 'eee.p.p.p', move: [3, '32'] },
  // 3
  { id: 10, board: 'e.eep...p', move: [1, '22'] },
  { id: 11, board: 'e.eep...p', move: [3, '22'] },
  { id: 12, board: 'e.eep...p', move: [3, '32'] },
  { id: 13, board: 'e.eep...p', move: [2, '13'] },
  { id: 14, board: 'e.e.pep..', move: [1, '12'] },
  { id: 15, board: 'e.e.pep..', move: [1, '22'] },
  { id: 16, board: 'e.e.pep..', move: [3, '22'] },
  { id: 17, board: 'e.e.pep..', move: [2, '33'] },
  // 4
  { id: 18, board: '.eepe...p', move: [2, '12'] },
  { id: 19, board: '.eepe...p', move: [3, '32'] },
  { id: 20, board: '.eepe...p', move: [1, '23'] },
  { id: 21, board: '.eepe...p', move: [1, '33'] },
  { id: 22, board: 'ee..epp..', move: [1, '12'] },
  { id: 23, board: 'ee..epp..', move: [2, '32'] },
  { id: 24, board: 'ee..epp..', move: [3, '13'] },
  { id: 25, board: 'ee..epp..', move: [3, '23'] },
  // 5
  { id: 26, board: 'e.epp..p.', move: [1, '22'] },
  { id: 27, board: 'e.epp..p.', move: [3, '22'] },
  { id: 28, board: 'e.epp..p.', move: [3, '32'] },
  { id: 29, board: 'e.e.pp.p.', move: [1, '12'] },
  { id: 30, board: 'e.e.pp.p.', move: [1, '22'] },
  { id: 31, board: 'e.e.pp.p.', move: [3, '22'] },
  // 6
  { id: 32, board: 'ee.p.p..p', move: [2, '12'] },
  { id: 33, board: 'ee.p.p..p', move: [2, '22'] },
  { id: 34, board: 'ee.p.p..p', move: [2, '32'] },
  { id: 35, board: '.eep.pp..', move: [2, '32'] },
  { id: 36, board: '.eep.pp..', move: [2, '32'] },
  { id: 37, board: '.eep.pp..', move: [2, '32'] },
  // 7
  { id: 38, board: '.ee.epp..', move: [2, '32'] },
  { id: 39, board: '.ee.epp..', move: [1, '13'] },
  { id: 40, board: '.ee.epp..', move: [1, '23'] },
  { id: 41, board: 'ee.pe...p', move: [2, '12'] },
  { id: 42, board: 'ee.pe...p', move: [1, '23'] },
  { id: 43, board: 'ee.pe...p', move: [1, '33'] },
  // 8
  { id: 44, board: '.eeeppp..', move: [2, '32'] },
  { id: 45, board: '.eeeppp..', move: [3, '22'] },
  { id: 46, board: 'ee.ppe..p', move: [1, '22'] },
  { id: 47, board: 'ee.ppe..p', move: [2, '13'] },
  // 9
  { id: 48, board: 'e.ee.p.p.', move: [2, '13'] },
  { id: 49, board: 'e.ee.p.p.', move: [2, '23'] },
  { id: 50, board: 'e.ep.e.p.', move: [2, '23'] },
  { id: 51, board: 'e.ep.e.p.', move: [2, '33'] },
  // 10
  { id: 52, board: '.ee.p...p', move: [3, '22'] },
  { id: 53, board: '.ee.p...p', move: [3, '32'] },
  { id: 54, board: 'ee..p.p..', move: [1, '12'] },
  { id: 55, board: 'ee..p.p..', move: [1, '22'] },
  // 11
  { id: 56, board: '.ee.p.p..', move: [3, '22'] },
  { id: 57, board: '.ee.p.p..', move: [3, '32'] },
  { id: 58, board: 'ee..p...p', move: [1, '12'] },
  { id: 59, board: 'ee..p...p', move: [1, '22'] },
  // 12
  { id: 60, board: 'e.ep....p', move: [3, '32'] },
  { id: 61, board: 'e.e..pp..', move: [1, '12'] },
  // 13
  { id: 62, board: '..eeep...', move: [2, '13'] },
  { id: 63, board: '..eeep...', move: [1, '23'] },
  { id: 64, board: 'e..pee...', move: [3, '23'] },
  { id: 65, board: 'e..pee...', move: [2, '33'] },
  // 14
  { id: 66, board: 'e..ppp...', move: [1, '22'] },
  { id: 67, board: '.eeppp...', move: [3, '22'] },
  // 15
  { id: 68, board: '.e.epp...', move: [2, '32'] },
  { id: 69, board: '.e.epp...', move: [1, '13'] },
  { id: 70, board: '.e.ppe...', move: [2, '12'] },
  { id: 71, board: '.e.ppe...', move: [3, '33'] },
  // 16
  { id: 72, board: 'e..eep...', move: [2, '13'] },
  { id: 73, board: 'e..eep...', move: [3, '23'] },
  { id: 74, board: '..epee...', move: [1, '23'] },
  { id: 75, board: '..epee...', move: [2, '33'] },
  // 17
  { id: 76, board: '..eep....', move: [3, '22'] },
  { id: 77, board: '..eep....', move: [3, '32'] },
  { id: 78, board: '..eep....', move: [2, '13'] },
  { id: 79, board: 'e..pe....', move: [1, '12'] },
  { id: 80, board: 'e..pe....', move: [1, '22'] },
  { id: 81, board: 'e..pe....', move: [2, '33'] },
  // 18
  { id: 82, board: '.e.pe....', move: [2, '12'] },
  { id: 83, board: '.e.pe....', move: [1, '23'] }, // TODO: test if 1 exists here
  { id: 84, board: '.e..ep...', move: [2, '32'] },
  { id: 85, board: '.e..ep...', move: [1, '23'] }, // TODO: test if 1 exists here
  // 18
  { id: 86, board: 'e..ep....', move: [1, '22'] },
  { id: 87, board: 'e..ep....', move: [2, '13'] },
  { id: 88, board: '..e.pe...', move: [3, '22'] },
  { id: 89, board: '..e.pe...', move: [2, '33'] },
];

function Hexapawn() {
  const [AI, setAI] = React.useState(AIdefault);
  const [lastMoveId, setLastMoveId] = React.useState(-1);
  const [player, setPlayer] = React.useState(playerDefault);
  const [enemy, setEnemy] = React.useState(enemyDefault);
  const [selectedId, setSelectedId] = React.useState(-1);
  const [validMoves, setValidMoves] = React.useState([]);
  const [stats, setStats] = React.useState({
    victories: 0,
    defeats: 0,
    lastVictory: '',
  });

  const [turn, setTurn] = React.useState('player');

  const getValidMoves = (id) => {
    const { x, y } = player.find((pawn) => pawn.id === id);
    const isAhead = enemy.find((pawn) => pawn.x === x && pawn.y === y - 1);
    const isAheadLeft = enemy.find((pawn) => pawn.x === x - 1 && pawn.y === y - 1);
    const isAheadRight = enemy.find((pawn) => pawn.x === x + 1 && pawn.y === y - 1);

    return [
      ...(isAhead ? [] : [{ x, y: y - 1 }]),
      ...(isAheadLeft ? [{ x: x - 1, y: y - 1 }] : []),
      ...(isAheadRight ? [{ x: x + 1, y: y - 1 }] : []),
    ];
  };

  const handleSelect = (id) => {
    setSelectedId(id);

    if (id > -1) {
      setValidMoves(getValidMoves(id));
    }
  };

  const handleMove = (move) => {
    setPlayer((prev) => prev.map((pawn) => (pawn.id === selectedId ? { ...pawn, ...move } : pawn)));
    setValidMoves([]);
    setSelectedId(-1);
    setEnemy((prev) => prev.filter((pawn) => pawn.x !== move.x || pawn.y !== move.y));
    setTurn('enemy');
  };

  const handleReset = () => {
    setPlayer(playerDefault);
    setEnemy(enemyDefault);
    setTurn('player');
  };

  const handleWin = () => {
    // console.log('WIN');
    setAI((prev) => prev.filter((move) => move.id !== lastMoveId));
    setStats((prev) => ({ ...prev, victories: prev.victories + 1, lastVictory: 'Player' }));
    setTurn('end');
    // handleReset();
  };
  const handleDefeat = () => {
    // console.log('DEFEAT');
    setStats((prev) => ({ ...prev, defeats: prev.defeats + 1, lastVictory: 'AI' }));
    setTurn('end');
    // handleReset();
  };

  const handleEnemy = () => {
    const currentBoard = [...player, ...enemy]
      .reduce(
        (acc, item) => {
          acc[item.x - 1 + 3 * (item.y - 1)] = item.id < 4 ? 'e' : 'p';
          return acc;
        },
        Array.from({ length: 9 }, () => '.'),
      )
      .join('');

    const moves = AI.filter(({ board }) => board === currentBoard);
    console.log(moves);
    if (moves.length === 0) {
      console.log('NO MOVES');
      return handleWin();
    }
    // const {
    //   id: moveId,
    //   move: [id, xy],
    // } = sample(moves);
    const {
      id: moveId,
      move: [id, xy],
    } = moves[0];

    setLastMoveId(moveId);
    setEnemy((prev) =>
      prev.map((pawn) => (pawn.id === id ? { ...pawn, x: +xy.charAt(0), y: +xy.charAt(1) } : pawn)),
    );
    setPlayer((prev) =>
      prev.filter((pawn) => pawn.x !== +xy.charAt(0) || pawn.y !== +xy.charAt(1)),
    );
    return setTurn('player');
  };

  React.useEffect(() => {
    if (turn === 'enemy') {
      if (player.some((pawn) => pawn.y === 1) || enemy.length === 0) {
        handleWin();
        return;
      }
      setTimeout(() => handleEnemy(), 250);
    }
    if (turn === 'player') {
      if (
        enemy.some((pawn) => pawn.y === 3) ||
        player.length === 0 ||
        player.every((pawn) => getValidMoves(pawn.id).length === 0)
      ) {
        handleDefeat();
      }
    }
  }, [turn]);

  return (
    <Section>
      <View
        css={`
          --grid: 10rem;
          position: relative;

          display: grid;
          grid-template-columns: repeat(3, var(--grid));
          grid-template-rows: repeat(3, var(--grid));
          max-width: calc(var(--grid) * 3);

          background-position: 0px 0px, calc(var(--grid) / 1) calc(var(--grid) / 1);
          background-size: calc(var(--grid) * 2) calc(var(--grid) * 2);
          background-image: linear-gradient(
              45deg,
              hsla(var(--hsl-text), 0.1) 25%,
              transparent 25%,
              transparent 75%,
              hsla(var(--hsl-text), 0.1) 75%,
              hsla(var(--hsl-text), 0.1) 100%
            ),
            linear-gradient(
              45deg,
              hsla(var(--hsl-text), 0.1) 25%,
              transparent 25%,
              transparent 75%,
              hsla(var(--hsl-text), 0.1) 75%,
              hsla(var(--hsl-text), 0.1) 100%
            );
        `}
      >
        {enemy.map((pawn) => (
          <Pawn key={pawn.id} pawn={pawn} />
        ))}
        {player.map((pawn) => (
          <Pawn
            key={pawn.id}
            pawn={pawn}
            isSelected={selectedId === pawn.id}
            onSelect={handleSelect}
            disabled={turn === 'end'}
          />
        ))}
        {validMoves.map((move) => (
          <Move
            key={`${move.x}${move.y}`}
            move={move}
            onMove={handleMove}
            disabled={turn === 'end'}
          />
        ))}
      </View>
      <p>{__DEV__ && `${AI.length} / ${AIdefault.length}`}</p>
      <p>
        {stats.victories} / {stats.victories + stats.defeats} victories
      </p>
      <p>Last victory: {stats.lastVictory}</p>
      <Button look="primary" disabled={turn !== 'end'} onClick={handleReset}>
        Next round
      </Button>
      {__DEV__ && (
        <>
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
        </>
      )}
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HexapawnPage({
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
        <Hexapawn />
      </Main>
    </RootContainer>
  );
}

HexapawnPage.propTypes = pagePropTypes;
