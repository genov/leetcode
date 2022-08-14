/**
 * 1423. Maximum Points You Can Obtain from Cards
 *
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 */

var maxScore = function (cardPoints, k) {
  let sum = 0;

  // Calculate sum from left.
  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }

  if (k === cardPoints.length) {
    return sum;
  }

  let max = sum;

  // Remove one last card from left and add one card from right. Update max.
  for (let i = 0; i < k; i++) {
    const lastOnLeft = cardPoints[k - i - 1];
    const firstOnRight = cardPoints[cardPoints.length - (1 + i)];
    sum = sum + firstOnRight - lastOnLeft;
    max = Math.max(sum, max);
  }

  return max;
};
