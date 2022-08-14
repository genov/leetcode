/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 */
const longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  if (!prefix) {
    return "";
  }

  // Single loop over input array.
  for (let i = 1; i < strs.length; i++) {
    if (prefix === "") {
      break;
    }

    // Compare string with prefix character by character and update prefix.
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== strs[i][j]) {
        prefix = prefix.substring(0, j);
      }
    }
  }

  return prefix;
};

// Should return 'fl';
const result = longestCommonPrefix(["flowers", "flower", "flight", "flow"]);
console.log(result);
