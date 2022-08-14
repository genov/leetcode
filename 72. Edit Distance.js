/**
 * 72. Edit Distance
 * https://leetcode.com/problems/edit-distance/
 */

/**
 * Bottom-Up approach
 * Explanation: https://www.youtube.com/watch?v=XYi2-LPrwm4
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const cache = [];

  for (let i = 0; i <= word1.length; i++) {
    cache[i] = [];

    for (let j = 0; j <= word2.length; j++) {
      cache[i][j] = 0;

      if (i === word1.length) {
        cache[i][j] = word2.length - j;
      }

      if (j === word2.length) {
        cache[i][j] = word1.length - i;
      }
    }
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      cache[i][j] =
        word1[i] === word2[j]
          ? cache[i + 1][j + 1]
          : 1 + Math.min(cache[i + 1][j], cache[i][j + 1], cache[i + 1][j + 1]);
    }
  }

  return cache[0][0];
};
