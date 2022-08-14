/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

/** Counts + PrefixSums O(N) */
var smallerNumbersThanCurrent = function (nums) {
  const n = nums.length;
  const results = new Array(n).fill(0);
  const counts = new Array(101).fill(0);
  const sums = [];

  for (let i = 0; i < n; i++) {
    counts[nums[i]] += 1;
  }

  for (let i = 0; i < counts.length; i++) {
    sums[i] = (sums[i - 1] || 0) + (counts[i - 1] || 0);
  }

  for (let i = 0; i < n; i++) {
    results[i] = sums[nums[i]];
  }

  return results;
};

/** Brute force O(N**2) */
var smallerNumbersThanCurrent = function (nums) {
  const counts = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        counts[i] += 1;
      }
    }
  }

  return counts;
};

/** Sort + using indexes - NlogN */
var smallerNumbersThanCurrent = function (nums) {
  const counts = new Array(nums.length).fill(0);
  const items = nums.map((value, index) => ({ index, value }));
  items.sort((a, b) => a.value - b.value);

  for (let i = 0; i < items.length; i++) {
    const count =
      items[i - 1] && items[i].value === items[i - 1].value
        ? counts[items[i - 1].index]
        : i;
    counts[items[i].index] = count;
  }

  return counts;
};
