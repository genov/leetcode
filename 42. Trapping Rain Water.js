/**
 * 42. Trapping Rain Water (hard)
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * https://leetcode.com/problems/trapping-rain-water/
 */
var trap = function (height) {
  let i = 0;
  let j = height.length - 1;
  let result = 0;
  let lastHeight = 0;

  while (i < j) {
    const currentHeight = Math.min(height[i], height[j]);

    if ((!lastHeight || currentHeight > lastHeight) && currentHeight) {
      const heightDiff = currentHeight - lastHeight;
      let addSquare = heightDiff * (j - i - 1);

      for (let k = i + 1; k < j; k++) {
        addSquare =
          addSquare -
          (height[k] > lastHeight
            ? Math.min(height[k] - lastHeight, heightDiff)
            : 0);
      }

      result = result + addSquare;
      lastHeight = currentHeight;
    }

    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return result;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
