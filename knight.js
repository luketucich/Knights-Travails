function generateBoard() {
  const adjacencyList = new Map();
  function getKey(i, j) {
    return `[${i},${j}]`;
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      adjacencyList.set(getKey(i, j), findValidMoves([i, j]));
    }
  }
  return {
    get: (coords) => adjacencyList.get(getKey(coords[0], coords[1])),
    adjacencyList,
  };
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

function arrayIncludes(arr, pos) {
  return arr.some((ele) => ele[0] === pos[0] && ele[1] === pos[1]);
}

function shortestPath(pos1, pos2) {
  const board = generateBoard();
  const queue = [{ position: pos1, path: [pos1] }];
  const squaresVisited = [pos1];

  while (queue.length !== 0) {
    const current = queue.shift();
    const position = current.position;
    const path = current.path;

    if (arrayIncludes([position], pos2)) {
      return path;
    }

    const moves = board.get(position);
    moves.forEach((move) => {
      if (!arrayIncludes(squaresVisited, move)) {
        queue.push({ position: move, path: path.concat([move]) });
        squaresVisited.push(move);
      }
    });
  }
}

function knightMoves(pos1, pos2) {
  const path = shortestPath(pos1, pos2);

  console.log(
    path.length == 2
      ? "You made it in just 1 move! Here's your path:"
      : `You made it in ${path.length - 1} moves! Here's your path:`
  );
  console.log(path.shift());
  path.forEach((move) => console.log(move));
}

knightMoves([0, 0], [7, 7]);
