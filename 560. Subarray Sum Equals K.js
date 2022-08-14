/**
 * 560. Subarray Sum Equals K
 *
 * https://leetcode.com/problems/subarray-sum-equals-k/
 */

// Solition is based on the idea that sum[i,j] = sum[0,j] - sum[0,i].
// This means that for each element we can check if we already have seen
// the sum that when using this formula will give us k.
// In the map we store curretn sum as a key and its number of appearances.
//  sums.set(0, 1) is used for the case when current number equals sum;
var subarraySum = function (nums, k) {
  let result = 0;
  const sums = new Map();
  sums.set(0, 1);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sums.has(sum - k)) {
      result += sums.get(sum - k);
    }

    sums.set(sum, (sums.get(sum) || 0) + 1);
  }

  return result;
};
