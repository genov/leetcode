/**
 * 128. Longest Consecutive Sequence
 */

// Optimal O(N) - hashmap and count ASC directions.
var longestConsecutive = function (nums) {
  if (!nums.length || nums.length === 1) {
    return nums.length;
  }

  const numsSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    numsSet.add(nums[i]);
  }

  let longestStreak = 0;
  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentStreak = 1;
      let nextCount = 1;
      while (numsSet.has(num + nextCount)) {
        currentStreak++;
        nextCount++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

// Naive approach (sorting). N*logN + N.
var longestConsecutive = function (nums) {
  if (!nums.length || nums.length === 1) {
    return nums.length;
  }

  // Sort.
  nums.sort((a, b) => a - b);

  // Find max sequence.
  let max = 1;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      count++;
      max = Math.max(count, max);
    }

    if (nums[i] - nums[i - 1] > 1) {
      count = 1;
    }
  }

  return max;
};

// Hashmap approach (pavlog).
var longestConsecutive = function (nums) {
  if (!nums.length || nums.length === 1) {
    return nums.length;
  }

  const hashMap = {};
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    hashMap[num] = 1;

    let leftCount = 0;
    while (hashMap[num - (leftCount + 1)]) {
      leftCount++;
    }

    let rightCount = 0;
    while (hashMap[num + (rightCount + 1)]) {
      rightCount++;
    }

    hashMap[num] = 1 + leftCount + rightCount;
    max = Math.max(max, hashMap[num]);
  }

  return max;
};
