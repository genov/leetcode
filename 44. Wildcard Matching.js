/**
 * 44. Wildcard Matching
 * https://leetcode.com/problems/wildcard-matching/
 */

// Matrix approach
var isMatch = function (s, p) {
  const n = s.length;
  const m = p.length;
  const dp = []; // Initialize matrix and fill from bottom right to top left.
  dp[m] = []; // Create last row.
  dp[m][n] = true; // Set true for last element which is EMPTY X EMPTY.

  // FALSE if pattern is empty and string has characters.
  if (!p.length && s.length) {
    return false;
  }

  for (let row = m - 1; row >= 0; row--) {
    // Creat row placeholder.
    dp[row] = [];

    for (let col = n; col >= 0; col--) {
      if (p[row] === "*") {
        // When current Pattern element is '*' set True only
        // if one of the right / bottom / right - bottom elements is True.
        dp[row][col] =
          !!dp[row + 1][col] || !!dp[row][col + 1] || !!dp[row + 1][col + 1];
      } else {
        // When current Pattern element is '?' or 'Alphabet' set True only
        // if it matched string character AND previous(bottom - right) is true.
        dp[row][col] =
          (p[row] === s[col] || p[row] === "?") && !!dp[row + 1][col + 1];
      }
    }
  }

  // First element's state is the result. Meaning all previous combinations are checked.
  return dp[0][0];
};

// Backtracking approach.
var isMatch = function (s, p) {
  return traverse(s, p);

  function traverse(s, p) {
    if (!s.length && !p.length) return true;
    if (!p.length) return false;

    if (p[0] === "*") {
      return (
        traverse(s, p.substr(1)) ||
        (!!s.length && traverse(s.substr(1), p)) ||
        traverse(s.substr(1), p.substr(1))
      );
    } else if (p[0] === "?" || p[0] === s[0]) {
      return traverse(s.substr(1), p.substr(1));
    }

    return false;
  }
};
