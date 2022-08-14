/**
 * 1239. Maximum Length of a Concatenated String with Unique Characters
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 */

var maxLength = function (arr) {
  const results = [];
  let maxLength = 0;

  backtrack("", arr);

  return maxLength;

  function backtrack(subs, left) {
    // Don't run for invalid subsequence.
    if (hasDuplicates(subs)) {
      return;
    }

    // Push valid subsequence to results and recalc the max length.
    results.push(subs);
    maxLength = Math.max(maxLength, subs.length);

    // Run backtrack for each element in those which left.
    for (let i = 0; i < left.length; i++) {
      backtrack(subs + left[i], left.slice(i + 1));
    }
  }

  // Checks if the string contains duplicates.
  function hasDuplicates(word) {
    const chars = new Set();

    for (let i = 0; i < word.length; i++) {
      if (chars.has(word[i])) {
        return true;
      }

      chars.add(word[i]);
    }

    return false;
  }
};
