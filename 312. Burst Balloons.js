/**
 * 312. Burst Balloons
 * https://leetcode.com/problems/burst-balloons/
 *
 * Video: https://www.youtube.com/watch?v=VFskby7lUbw
 */

var maxCoins = function (nums) {
  nums = [1, ...nums, 1];
  const dp = Array.from({ length: nums.length }, () => []);

  function dfs(left, right) {
    if (right - left < 0) {
      return 0;
    }

    if (dp[left][right]) {
      return dp[left][right];
    }

    dp[left][right] = 0;
    for (let i = left; i < right + 1; i++) {
      let coins = nums[left - 1] * nums[i] * nums[right + 1];
      coins += dfs(left, i - 1) + dfs(i + 1, right);
      dp[left][right] = Math.max(dp[left][right], coins);
    }

    return dp[left][right];
  }

  return dfs(1, nums.length - 2);
};
