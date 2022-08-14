/**
 * 1539. Kth Missing Positive Number
 * https://leetcode.com/problems/kth-missing-positive-number/
 */

// Binary search approach (leetcode)
var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let pivot = Math.round((left + right) / 2);

    if (arr[pivot] - pivot - 1 < k) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return left + k;
};

// Linear search approach. Decrement from K.
var findKthPositive = function (arr, k) {
  if (k <= arr[0] - 1) {
    return k;
  }

  k = k - (arr[0] - 1);

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i] - 1;

    if (k <= diff) {
      return arr[i] + k;
    }

    k = k - diff;
  }

  return arr[arr.length - 1] + k;
};

// Binary search approach 0(logN)
var findKthPositive = function (arr, k) {
  if (arr[0] - 1 >= k) {
    return k;
  }

  k = k - (arr[0] - 1);

  return binarySearch(arr, 0, arr.length - 1) || arr[arr.length - 1] + k;

  function binarySearch(arr, start, end) {
    if (start >= end) {
      return null;
    }

    const currentMissing = arr[end] - arr[start] - 1;
    const isEmpyRange = end - start === 1;
    if (isEmpyRange && currentMissing >= k) {
      return arr[start] + k;
    }

    const midIndex = Math.round((start + end) / 2);
    const missingInLeft =
      arr[midIndex] - arr[start] + 1 - (midIndex - start + 1);

    if (k > missingInLeft) {
      k -= missingInLeft;
      return binarySearch(arr, midIndex, end);
    } else {
      return binarySearch(arr, start, midIndex);
    }
  }
};
