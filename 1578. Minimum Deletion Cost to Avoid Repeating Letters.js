/**
 * 1578. Minimum Deletion Cost to Avoid Repeating Letters (medium)
 *
 * https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/
 */

/** Greedy. */
var minCost = function (s, cost) {
  let result = 0;
  let left = 0;
  let right = 1;

  // Set two pointer and move start moving the R.
  while (right < s.length) {
    // If characters are different move both pointers.
    if (s[left] !== s[right]) {
      right++;
      left++;
    } else {
      // If characters are equal set cost at L pointer as sum and most expensive.
      let max = cost[left];
      let sum = cost[left];

      // While meeting equal character, extend the window, update most expensive and sum all costs.
      while (s[left] === s[right]) {
        sum += cost[right];
        max = Math.max(max, cost[right]);
        right++;
      }

      // Reduce the sum by most expensive.
      sum -= max;

      // Update the result.
      result += sum;
      left = right - 1;
    }
  }

  return result;
};
