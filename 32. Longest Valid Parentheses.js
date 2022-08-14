/**
 * 32. Longest Valid Parentheses (hard) - O(N)
 */

// Solution:
//
//   s:  )  (  (  )  (  )  (  )  )  )  (  )
//  dp:  0  0  0  2  0  4  0  6  8  0  0  2
// idx:  0  1  2  3  4  5  6  7  8  9  10 11

var longestValidParentheses = function (s) {
  const dp = [];
  dp[0] = 0;

  for (let i = 1; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      dp[i] = 0;
    } else {
      let score = 0;

      if (s[i - 1] === "(") {
        score = 2 + (dp[i - 2] || 0);
      } else if (s[i - 1] === ")" && dp[i - 1]) {
        const matchIdx = i - dp[i - 1] - 1;

        if (s[matchIdx] === "(") {
          score = score + 2 + (dp[matchIdx - 1] || 0) + dp[i - 1];
        }
      }

      dp[i] = score;
    }
  }

  return Math.max(...dp);
};
