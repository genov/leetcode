/**
 * 11. Container With Most Water
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container,
 * such that the container contains the most water. Notice that you may not slant the container.
 *
 * https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;

  while (i < j) {
    let product = (j - i) * Math.min(height[i], height[j]);

    if (product > max) {
      max = product;
    }

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};
