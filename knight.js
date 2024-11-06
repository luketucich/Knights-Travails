function generateBoard() {
  const adjacencyList = new Map();

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      adjacencyList.set(`[${i},${j}]`, findValidMoves([i, j]));
    }
  }

  return adjacencyList;
}

function findValidMoves(pos) {
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

  const validMoves = [];

  moves.forEach((move) => {
    const newPos = [pos[0] + move[0], pos[1] + move[1]];
    if (newPos[0] >= 0 && newPos[0] <= 7 && newPos[1] >= 0 && newPos[1] <= 7)
      validMoves.push(newPos);
  });

  return validMoves;
}

function knightMoves(pos1, pos2) {
  const board = generateBoard(),
    strPos1 = `[${pos1[0]},${pos1[1]}]`,
    strPos2 = `[${pos2[0]},${pos2[1]}]`;

  console.log(board.get(strPos1));
  console.log(board.get(strPos2));
}

knightMoves([1, 1], [2, 2]);
