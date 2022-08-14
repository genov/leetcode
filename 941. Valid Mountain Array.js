/**
 * 941. Valid Mountain Array
 * https://leetcode.com/problems/valid-mountain-array/
 */

var validMountainArray = function (arr) {
  if (arr.lengthh < 3) {
    return false;
  }

  let tops = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i] === arr[i + 1] ||
      (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2])
    ) {
      return false;
    }

    if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
      tops++;
    }
  }

  return tops === 1;
};
