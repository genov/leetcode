/**
 * 10. Regular Expression Matching (hard)
 * https://leetcode.com/problems/regular-expression-matching/
 */

// DP matrix approach.
var isMatch = function (s, p) {
  const rows = p.length; //
  const cols = s.length;
  const dp = []; // Initialize matrix and fill from bottom right to top left.
  dp[rows] = []; // Create last row.
  dp[rows][cols] = true; // Set true for last element which is EMPTY X EMPTY.

  // FALSE if pattern is empty and string has characters.
  if (s.length && !p.length) {
    return false;
  }

  for (let row = rows - 1; row >= 0; row--) {
    // Create row placeholder.
    dp[row] = [];

    for (let col = cols; col >= 0; col--) {
      if (p[row] === "*") {
        // When pattern char is '*' - check if prev character in pattern
        // equals current string char OR equals '.'
        const matchesChar = p[row - 1] === s[col] || p[row - 1] === ".";

        // If YES, then check neighours to the right/bottom/diagonal.
        // If NO, then use result from neighour on the bottom.
        dp[row][col] = matchesChar
          ? !!(dp[row + 1][col] || dp[row][col + 1] || dp[row + 1][col + 1])
          : !!dp[row + 1][col];
      } else {
        // Check if previously checked char is '*'.
        const hasStar = p[row + 1] === "*";

        // If YES, then use it's result.
        // If NO, then set TRUE only if character equals string OR '.'
        // and right bottom neibhour(diagonal) is True.
        if (hasStar) {
          dp[row][col] = !!dp[row + 1][col];
        } else {
          const matchesChar = p[row] === s[col] || p[row] === ".";
          dp[row][col] = matchesChar && !!dp[row + 1][col + 1];
        }
      }
    }
  }

  // First element's state is the result. Meaning all previous combinations are checked.
  return dp[0][0];
};
