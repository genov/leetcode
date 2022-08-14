/**
 * 1089. Duplicate Zeros
 * https://leetcode.com/problems/duplicate-zeros/
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.splice(arr.length - 1, 1);
      i++;
    }
  }
};
