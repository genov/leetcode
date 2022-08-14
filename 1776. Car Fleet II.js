/**
 * 1776. Car Fleet II (hard) O(N)
 *
 * https://leetcode.com/problems/car-fleet-ii/
 *
 * Solution: https://www.youtube.com/watch?v=SVW1bD_PN6A
 */

// Approach:
// Use stack indexes of traversed elements. Traverse fro the end.
// Remove from stack if car will never collide with next.
//
var getCollisionTimes = function (cars) {
  const stack = [];
  const results = [];

  for (let i = cars.length - 1; i >= 0; i--) {
    const car = cars[i];
    results[i] = -1;

    while (stack.length) {
      const top = stack[stack.length - 1];

      // Remove from stack if car will never collide with next.
      if (car[1] <= cars[top][1]) {
        stack.pop();
        continue;
      }

      const collisionTime = (cars[top][0] - car[0]) / (car[1] - cars[top][1]);

      if (collisionTime <= results[top] || results[top] === -1) {
        results[i] = collisionTime;
        break;
      }

      stack.pop();
    }

    stack.push(i);
  }

  return results;
};
