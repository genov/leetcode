/**
 * 752. Open the Lock
 * https://leetcode.com/problems/open-the-lock/
 */

// BFS iterative approach (graph of connected nodes from 0000 to 9999).
var openLock = function (deadends, target) {
  const START = "0000";

  // Edge case: 0000 is dead end.
  if (deadends.includes(START)) {
    return -1;
  }

  // Edge case: target is 0000;
  if (target === START) {
    return 0;
  }

  // There are 8 possible direction with 1 step per digit.
  const directions = [
    [1, 0, 0, 0],
    [-1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, -1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, -1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, -1],
  ];
  const queue = [];
  const visited = {};
  let turns = 0;
  let size = 0;

  // Starting from target is faster. Can also start from START.
  queue.push(target);

  while (queue.length) {
    // Incrase number of turns per new level of graph (set of directions).
    turns++;

    size = queue.length; // Track size of graph level.
    for (let i = 0; i < size; i++) {
      const turn = queue.shift(); // Dequeue element

      for (let direction of directions) {
        // Get combination values for each direction.
        const nextTurn = turn
          .split("")
          .map((el, index) => {
            const next = Number(el) + direction[index];
            return next === -1 ? 9 : next % 10;
          })
          .join("");

        // Skip branch if combination is visited or dead end.
        if (visited[nextTurn] || deadends.includes(nextTurn)) {
          continue;
        }

        // Return first match (since its BFS it will be the shortest).
        if (nextTurn === START) {
          return turns;
        }

        // Mark combination as visited.
        visited[nextTurn] = true;

        // Push it to queue.
        // Next time it is dequeued we'll check only its neibhours.
        queue.push(nextTurn);
      }
    }
  }

  return -1;
};
