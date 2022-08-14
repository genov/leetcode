/**
 * 265. Paint House II
 * https://leetcode.com/problems/paint-house-ii/
 */

/** DP Approach */
var minCostII = function (costs) {
  for (let house = 1; house < costs.length; house++) {
    let firstMin = -1;
    let secondMin = -1;
    const prevHouse = costs[house - 1];

    for (let k = 0; k < prevHouse.length; k++) {
      const currentCost = prevHouse[k];

      if (firstMin == -1 || currentCost < prevHouse[firstMin]) {
        secondMin = firstMin;
        firstMin = k;
      } else if (secondMin == -1 || currentCost < prevHouse[secondMin]) {
        secondMin = k;
      }
    }

    for (let k = 0; k < costs[house].length; k++) {
      if (k === firstMin) {
        costs[house][k] += prevHouse[secondMin];
      } else {
        costs[house][k] += prevHouse[firstMin];
      }
    }
  }

  return Math.min(...costs[costs.length - 1]);
};

/** O(n x k x k) approach */
var minCostII = function (costs) {
  const filterByIndex = (index, list) =>
    list.filter((el, idx) => idx !== index);

  for (let n = costs.length - 2; n >= 0; n--) {
    for (let k = 0; k < costs[n].length; k++) {
      costs[n][k] += Math.min(...filterByIndex(k, costs[n + 1]));
    }
  }

  return Math.min(...costs[0]);
};
