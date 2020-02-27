// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import sample from 'lodash/sample';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useMaze() {
  // dimensions
  const [width, setWidth] = React.useState(20);
  const [height, setHeight] = React.useState(20);

  // maze 1d array
  const [maze, setMaze] = React.useState(
    Array.from({ length: width * height }, () => ({ top: 1, right: 1, bottom: 1, left: 1 })),
  );

  // helpers
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const stack = React.useRef([]);
  const visitedCells = React.useRef(new Set());

  // core recursion
  function generateMaze(currentCellIdx = currentIdx) {
    // there are still non-visited cells
    if (visitedCells.current.size < maze.length) {
      visitedCells.current.add(currentCellIdx);

      // calculate neighbour idxs in 1d array based on width and height
      // return -1 if neighbour is out of a row/column
      const neighbourDirectionsIdx = {
        top: currentCellIdx % height === 0 ? -1 : currentCellIdx - width,
        right: (currentCellIdx + 1) % width === 0 ? -1 : currentCellIdx + 1,
        bottom: currentCellIdx >= height * width - width ? -1 : currentCellIdx + width,
        left: currentCellIdx % width === 0 ? -1 : currentCellIdx - 1,
      };

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
            if (idx === currentCellIdx) return { ...cell, [randomNeighbourDirection]: 0 };
            if (idx === neighbourDirectionsIdx[randomNeighbourDirection]) {
              if (randomNeighbourDirection === 'top') return { ...cell, bottom: 0 };
              if (randomNeighbourDirection === 'bottom') return { ...cell, top: 0 };
              if (randomNeighbourDirection === 'left') return { ...cell, right: 0 };
              if (randomNeighbourDirection === 'right') return { ...cell, left: 0 };
              return cell;
            }
            return cell;
          }),
        );

        setCurrentIdx(neighbourDirectionsIdx[randomNeighbourDirection]); // set next cell idx
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

  // restart with possibly different sizing
  const regenerateMaze = ({ width: newWidth = width, height: newHeight = height } = {}) => {
    // reset values
    stack.current = [];
    visitedCells.current = new Set();
    setWidth(newWidth);
    setHeight(newHeight);
    setMaze(
      Array.from({ length: newWidth * newHeight }, () => ({
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
      })),
    );

    generateMaze();
  };

  // return hook surface API
  return [
    maze,
    regenerateMaze,
    {
      currentIdx,
    },
  ];
}
