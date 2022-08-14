/**
 * 279. Perfect Squares
 * https://leetcode.com/problems/perfect-squares/
 *
 * https://www.geeksforgeeks.org/minimum-number-of-squares-whose-sum-equals-to-given-number-n/
 */

// Recursive approach (Timeout).
var numSquares = function (n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    dp[i] = i; // By default we set max number of squares because any number can be 1*1 + 1*1 ...

    for (let x = 1; x <= Math.ceil(Math.sqrt(i)); x++) {
      const temp = x * x;

      if (temp > i) {
        break;
      } else {
        dp[i] = Math.min(dp[i], 1 + dp[i - temp]);
      }
    }
  }

  return dp[n];
};
