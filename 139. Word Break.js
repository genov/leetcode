/**
 * 139. Word Break
 * https://leetcode.com/problems/word-break/
 */

// Dynamic programming approach
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1);
  dp.fill(false);
  dp[0] = true;

  for (let length = 1; length <= s.length; length++) {
    for (let start = 0; start < length; start++) {
      const word = s.slice(start, length);
      if (dp[start] && wordDict.includes(word)) {
        dp[length] = true;
        break;
      }
    }
  }

  return !!dp[dp.length - 1];
};

// Naive recursive approach (O(N**3))
var wordBreak = function (s, wordDict) {
  return wordBreak(s, wordDict, 0, {});

  function wordBreak(s, wordDict, start, memo) {
    if (start === s.length) {
      return true;
    }

    if (memo[start]) {
      return memo[start];
    }

    for (let end = start + 1; end <= s.length; end++) {
      if (
        wordDict.includes(s.substring(start, end)) &&
        wordBreak(s, wordDict, end, memo)
      ) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  }
};

// Memoization
var wordBreak = function (s, wordDict) {
  return wordBreak(s, wordDict, 0, {});

  function wordBreak(s, wordDict, start, memo) {
    if (start === s.length) {
      return true;
    }

    if (memo[start]) {
      return memo[start];
    }

    for (let end = start + 1; end <= s.length; end++) {
      if (
        wordDict.includes(s.substring(start, end)) &&
        wordBreak(s, wordDict, end, memo)
      ) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  }
};
