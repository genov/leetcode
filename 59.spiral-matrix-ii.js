/**
 * 59. Spiral Matrix II
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 * https://leetcode.com/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function (n) {
  if (n === 1) {
    return [[1]];
  }

  const matrix = [];
  let count = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let direction = 0;

  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  while (rowStart <= rowEnd && colStart <= colEnd) {
    switch (direction) {
      // Right
      case 0: {
        for (let i = colStart; i <= colEnd; i++) {
          matrix[rowStart][i] = count;
          count++;
        }
        rowStart++;
        break;
      }
      // Down
      case 1: {
        for (let i = rowStart; i <= rowEnd; i++) {
          matrix[i][colEnd] = count;
          count++;
        }
        colEnd--;
        break;
      }
      // Left
      case 2: {
        for (let i = colEnd; i >= colStart; i--) {
          matrix[rowEnd][i] = count;
          count++;
        }
        rowEnd--;
        break;
      }
      // Up
      case 3: {
        for (let i = rowEnd; i >= rowStart; i--) {
          matrix[i][colStart] = count;
          count++;
        }
        colStart++;
        break;
      }
    }
    direction = (direction + 1) % 4; // Don't go over case 3.
  }

  return matrix;
};
