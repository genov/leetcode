/**
 * 315. Count of Smaller Numbers After Self.
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 */

// BS approach
function countSmaller(nums) {
  const results = [];
  const sorted = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] = bs(nums[i]);
  }

  return results;

  function bs(num) {
    let start = 0;
    let end = sorted.length - 1;

    if (sorted.length === 1) {
      start = num <= sorted[0] ? 0 : 1;
    }

    while (start < end) {
      if (end - start === 1) {
        if (num > sorted[start] && num <= sorted[end]) {
          start++;
        }
        if (num > sorted[end]) {
          start = end + 1;
        }
        break;
      }

      const mid = Math.floor((start + end) / 2);
      if (sorted[mid] >= num) {
        end = mid;
      } else {
        start = mid;
      }
    }

    sorted.splice(start, 0, num);
    return start;
  }
}

// Merge sort approach
var countSmaller = function (nums) {
  const results = new Array(nums.length).fill(0);
  const aux = [];
  const items = nums.map((value, index) => new NumItem(index, value));

  sort(items, aux, 0, nums.length - 1, results);

  return results;

  function sort(items, aux, start, end, results) {
    if (start >= end) {
      return;
    }

    const mid = Math.floor((start + end) / 2);

    sort(items, aux, start, mid, results);
    sort(items, aux, mid + 1, end, results);
    merge(items, aux, start, mid, end, results);
  }

  function merge(items, aux, start, mid, end, results) {
    for (let i = start; i <= end; i++) {
      aux[i] = items[i];
    }

    let l = start;
    let r = mid + 1;
    let rightCounter = 0;

    for (let i = start; i <= end; i++) {
      if (l > mid) {
        items[i] = aux[r];
        r++;
      } else if (r > end) {
        results[aux[l].index] += rightCounter;
        items[i] = aux[l];
        l++;
      } else if (aux[r].value < aux[l].value) {
        rightCounter++;
        items[i] = aux[r];
        r++;
      } else {
        results[aux[l].index] += rightCounter;
        items[i] = aux[l];
        l++;
      }
    }
  }
};

class NumItem {
  constructor(index, value) {
    this.index = index;
    this.value = value;
  }
}

// BST approach (62/62 test cases, Timeout exceeded)
var countSmaller = function (nums) {
  const n = nums.length;
  const results = [];

  let root;

  for (let i = n - 1; i >= 0; i--) {
    results[i] = insert(nums[i]);
  }

  function insert(key) {
    if (!root) {
      root = new Node(key);
      return 0;
    }

    let current = root;
    let preSum = 0;

    while (current) {
      if (current.value > key) {
        current.sSum += 1;

        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(key);
          return preSum;
        }
      } else if (current.value < key) {
        preSum = preSum + current.duplicates + current.sSum;

        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(key);
          return preSum;
        }
      } else {
        current.duplicates += 1;
        return current.sSum + preSum;
      }
    }
  }

  return results;
};

class Node {
  constructor(value) {
    this.value = value;
    this.duplicates = 1;
    this.sSum = 0;
  }
}

// BST
[5, 1, 0, 7, 8, 1, 2];
