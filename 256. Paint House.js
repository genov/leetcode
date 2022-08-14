/**
 * 256. Paint House
 * https://leetcode.com/problems/paint-house/
 */

/** Recursive tree approach */
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  if (costs.length === 0) {
    return 0;
  }

  const getKey = (house, color) => `${house}-${color}`;
  const memo = {};

  function paintCost(house, color) {
    let totalCost = costs[house][color];

    if (memo[getKey(house, color)]) {
      return memo[getKey(house, color)];
    }

    if (house === costs.length - 1) {
    } else if (color === 0) {
      totalCost += Math.min(paintCost(house + 1, 1), paintCost(house + 1, 2));
    } else if (color === 1) {
      totalCost += Math.min(paintCost(house + 1, 0), paintCost(house + 1, 2));
    } else if (color === 2) {
      totalCost += Math.min(paintCost(house + 1, 0), paintCost(house + 1, 1));
    }

    memo[getKey(house, color)] = totalCost;

    return totalCost;
  }

  return Math.min(paintCost(0, 0), paintCost(0, 1), paintCost(0, 2));
};

/** DP approach */
var minCost = function (costs) {
  for (let n = costs.length - 2; n >= 0; n--) {
    costs[n][0] += Math.min(costs[n + 1][1], costs[n + 1][2]);
    costs[n][1] += Math.min(costs[n + 1][0], costs[n + 1][2]);
    costs[n][2] += Math.min(costs[n + 1][0], costs[n + 1][1]);
  }

  return Math.min(costs[0][0], costs[0][1], costs[0][2]);
};
