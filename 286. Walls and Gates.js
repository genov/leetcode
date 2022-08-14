/**
 * 286. Walls and Gates
 * https://leetcode.com/problems/walls-and-gates/
 */

// O(N*M);
// Each room visited only once.
var wallsAndGates = function (rooms) {
  const n = rooms.length;
  const m = rooms[0].length;
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const GATE = 0;
  const EMPTY = 2147483647;
  const queue = [];

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      // Scan all rooms and push rooms with Gates to queue.
      if (rooms[row][col] === GATE) {
        queue.push({ row, col });
      }
    }
  }

  // Starting from pushed gates, dequeue 1st, then calculate distance for
  // each 1 available next direction (Gate (0) + 1) and push those to queue.
  while (queue.length) {
    const { row, col } = queue.shift();

    for (const [nextRow, nextCol] of directions) {
      const next = { row: row + nextRow, col: col + nextCol };

      // Skip rooms going beyond matrix bounds and
      // non - empty(already calculated, walls, gates).
      if (
        next.row < 0 ||
        next.row >= n ||
        next.col < 0 ||
        next.col >= m ||
        rooms[next.row][next.col] !== EMPTY
      ) {
        continue;
      }

      // Set rooms value as current room value plus 1.
      rooms[next.row][next.col] = rooms[row][col] + 1;

      // Add room to queue. On next iteration we'll check only its neibhours.
      queue.push(next);
    }
  }
};
