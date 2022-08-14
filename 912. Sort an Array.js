/**
 * 912. Sort an Array
 * https://leetcode.com/problems/sort-an-array/
 */

// Merge sort
// https://www.coursera.org/learn/algorithms-part1/lecture/ARWDq/mergesort
var mergeSort = function (nums) {
  const aux = [];

  sort(nums, aux, 0, nums.length - 1);

  return nums;

  function sort(arr, aux, start, end) {
    if (start >= end) {
      return;
    }

    const mid = Math.floor((end - start) / 2) + start;

    sort(arr, aux, start, mid);
    sort(arr, aux, mid + 1, end);
    merge(arr, aux, start, mid, end);
  }

  function merge(arr, aux, start, mid, end) {
    // Copy elements.
    for (let i = start; i <= end; i++) {
      aux[i] = arr[i];
    }

    let l = start; // Pointer for 1st half start.
    let r = mid + 1; // Pointer for 2nd half start.

    for (let i = start; i <= end; i++) {
      if (l > mid) {
        arr[i] = aux[r];
        r++;
      } else if (r > end) {
        arr[i] = aux[l];
        l++;
      } else if (aux[r] < aux[l]) {
        arr[i] = aux[r];
        r++;
      } else {
        arr[i] = aux[l];
        l++;
      }
    }
  }
};

// Quick Sort
// www.coursera.org/learn/algorithms-part1/lecture/vjvnC/quicksort
// https://www.youtube.com/watch?v=7h1s2SojIRw&t=277s

var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);

  return nums;

  function quickSort(nums, low, high) {
    if (high <= low) {
      return;
    }

    const i = partition(nums, low, high);
    quickSort(nums, low, i - 1);
    quickSort(nums, i + 1, high);
  }

  function partition(nums, low, high) {
    const pivot = low;

    let i = low + 1;
    let j = high;

    while (i <= j) {
      while (nums[i] <= nums[pivot] && i <= j) {
        i++;
      }

      while (nums[j] > nums[pivot] && i <= j) {
        j--;
      }

      if (i > j) {
        break;
      }

      swap(nums, i, j);
    }

    swap(nums, pivot, j);

    return j;
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};
