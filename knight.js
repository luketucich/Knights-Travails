import uniqueSortedArray from "./sort.js";
import Tree from "./tree.js";

const moves = [
  // Up
  [-2, 1], // Down (side) left
  [-1, 2], // Up left
  [1, 2], // Up right
  [2, 1], // Up (side) right

  // Down
  [-2, -1], // Down (side) left
  [-1, -2], // Down left
  [1, -2], // Down right
  [2, -1], // Down (side) right
];

function findValidMoves(pos) {
  const validMoves = [];

  moves.forEach((move) => {
    const newPos = [pos[0] + move[0], pos[1] + move[1]];
    if (newPos[0] >= 0 && newPos[0] <= 7 && newPos[1] >= 0 && newPos[1] <= 7)
      validMoves.push(newPos);
  });

  return validMoves;
}

function knightMoves(pos1, pos2) {}
