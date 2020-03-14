// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import sample from 'lodash/sample';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const defaultCell = {
  top: 1,
  right: 1,
  bottom: 1,
  left: 1,
};

// define opposite direction key, useful when adjusting neighbouring walls
const oppositeDirection = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

// calculate neighbour idxs in 1d array based on width and height
// return -1 if neighbour is out of a row/column
function getNeighbourDirectionsIdx(currentIdx, width, height) {
  return {
    top: currentIdx % height === 0 ? -1 : currentIdx - width,
    right: (currentIdx + 1) % width === 0 ? -1 : currentIdx + 1,
    bottom: currentIdx >= height * width - width ? -1 : currentIdx + width,
    left: currentIdx % width === 0 ? -1 : currentIdx - 1,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useMaze(defaultWidth, defaultHeight) {
  // dimensions
  const size = React.useRef({
    width: defaultWidth,
    height: defaultHeight,
  });

  // maze 1d array
  const [maze, setMaze] = React.useState(
    Array.from({ length: size.current.width * size.current.height }, () => defaultCell),
  );

  // helpers
  const stack = React.useRef([]);
  const visitedCells = React.useRef(new Set());

  // core recursion
  function generateMaze(currentCellIdx = 0) {
    // there are still non-visited cells
    if (visitedCells.current.size < maze.length) {
      visitedCells.current.add(currentCellIdx);

      const neighbourDirectionsIdx = getNeighbourDirectionsIdx(
        currentCellIdx,
        size.current.width,
        size.current.height,
      );

      // find unvisited neighbour cells idxs
      const availableDirections = Object.keys(neighbourDirectionsIdx).filter((direction) => {
        const neighbourIdx = neighbourDirectionsIdx[direction];
        const neighbour = maze[neighbourIdx];
        return !!neighbour && !visitedCells.current.has(neighbourIdx);
      });

      // get random unvisited neighbour cell
      const randomNeighbourDirection = sample(availableDirections);

      // we have unvisited neighbours
      if (randomNeighbourDirection) {
        stack.current.push(currentCellIdx); // add current cell to stack

        setMaze((prev) =>
          prev.map((cell, idx) => {
            if (idx === currentCellIdx) {
              return { ...cell, [randomNeighbourDirection]: 0 };
            }
            if (idx === neighbourDirectionsIdx[randomNeighbourDirection]) {
              return { ...cell, [oppositeDirection[randomNeighbourDirection]]: 0 };
            }
            return cell;
          }),
        ); // remove walls between current cell and neighbour

        return generateMaze(neighbourDirectionsIdx[randomNeighbourDirection]); // recurse
      }

      // no unvisited neighbours, we need to backtrack
      if (stack.current.length > 0) {
        // go back to previous stack idx
        const lastStackIdx = stack.current.pop();
        return generateMaze(lastStackIdx);
      }
    }

    // we're done
    return null;
  }

  // restart with new values
  const regenerateMaze = (width = size.current.width, height = size.current.height) => {
    setMaze(Array.from({ length: width * height }, () => defaultCell));

    size.current = { width, height };
    stack.current = [];
    visitedCells.current.clear();
  };

  React.useEffect(() => {
    generateMaze();
  }, [size.current]);

  // return hook surface API
  return [maze, React.useCallback(regenerateMaze, [])];
}
