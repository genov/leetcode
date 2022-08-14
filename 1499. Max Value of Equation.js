/**
 * 1499. Max Value of Equation
 *
 * https://leetcode.com/problems/max-value-of-equation/
 *
 * Idea is to convert yi + yj + |xi - xj| into yj + xj + yi- xi.
 * Then use queue to store paris fo numbers for each point:
 * [[yi- xi, xi]...] where 0 element is used to maximize result,
 * and 1 element is used to satisfy contraint.
 * At every step check queue and dequeue not satisfying element and remove
 * elements less than current from the end.
 */

var findMaxValueOfEquation = function (points, k) {
  const X = 0;
  const Y = 1;
  const queue = [];
  let max = -Infinity;

  for (const point of points) {
    while (queue.length && point[X] - queue[0][1] > k) {
      queue.shift();
    }
    if (queue.length) {
      max = Math.max(point[X] + point[Y] + queue[0][0], max);
    }

    while (queue.length && queue[queue.length - 1][0] < point[Y] - point[X]) {
      queue.pop();
    }

    queue.push([point[Y] - point[X], point[X]]);
  }

  return max;
};
