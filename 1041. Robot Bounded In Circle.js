/**
 * 1041. Robot Bounded In Circle (medium)
 * https://leetcode.com/problems/robot-bounded-in-circle/
 */

// Idea is based on proof that there is a cycle in 2 cases:
// 1. At the end of iteration position equals to starting position.
// 2. At the end of iterations direction is not initial (not north facing).
var isRobotBounded = function (instructions) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let x = 0;
  let y = 0;

  // 0 - Up, 1 - Right, 2 - Down, 3 - Left.
  let direction = 0;

  for (const char of instructions) {
    if (char === "L") {
      direction = (direction + 3) % 4;
    } else if (char === "R") {
      direction = (direction + 1) % 4;
    } else {
      x += directions[direction][0];
      y += directions[direction][1];
    }
  }

  return (x === 0 && y === 0) || direction !== 0;
};
