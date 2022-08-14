/**
 * 1299. Replace Elements with Greatest Element on Right Side.
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */

// Start from the end and store Max value seen so far; O(N).
function replaceElements(arr) {
  let rightMax = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    const current = arr[i];
    arr.splice(i, 1, rightMax);
    rightMax = Math.max(rightMax, current);
  }

  arr[arr.length - 1] = -1;

  return arr;
}

// Recursive approach (O(N**2))
var replaceElements = function (arr) {
  replaceElement(arr, 0);

  function replaceElement(arr, index) {
    if (arr[index] === undefined) {
      return;
    }

    if (index === arr.length - 1) {
      arr[index] = -1;
      return;
    }

    let max = Number.MIN_VALUE;
    for (let i = index + 1; i < arr.length; i++) {
      max = Math.max(max, arr[i]);
    }

    arr.splice(index, 1, max);

    replaceElement(arr, index + 1);
  }

  return arr;
};
