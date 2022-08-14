/**
 * 1051. Height Checker
 * https://leetcode.com/problems/height-checker/
 *
 * Counting sort + compare loop.
 */

var heightChecker = function (heights) {
  let count = 0;
  const counts = new Array(heights.length + 1).fill(0);
  const sorted = [];

  // Count occurances.
  for (let i = 0; i < heights.length; i++) {
    counts[heights[i]]++;
  }

  // Apply running sum.
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  // Place nums to sorted positions.
  for (let i = 0; i < heights.length; i++) {
    const num = heights[i];
    sorted[counts[num] - 1] = num;
    counts[num]--;
  }

  // Compare heights with sorted and increase count for each unmatched pair.
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      count++;
    }
  }

  return count;
};
