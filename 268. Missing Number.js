/**
 * 268. Missing Number
 * https://leetcode.com/problems/missing-number/
 */
var missingNumber = function (nums) {
  const numsSum = nums.reduce((sum, num) => {
    return sum + num;
  }, 0);

  let targetSum = 0;
  for (let i = 0; i <= nums.length; i++) {
    targetSum += i;
  }

  return targetSum - numsSum;
};
