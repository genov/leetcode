/**
 * 1081. Smallest Subsequence of Distinct Characters
 * https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 */
var smallestSubsequence = function (s) {
  const resultStack = [];
  const seen = new Set();
  const lastOccur = {};

  // Track last appearance for each character.
  for (let i = 0; i < s.length; i++) {
    lastOccur[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Add only not seen.
    if (!seen.has(char)) {
      let peak = getResultPeak();

      // Compare with last added and remove last added if it's bigger and not last.
      while (peak && char < peak && lastOccur[peak] > i) {
        const removed = resultStack.pop();
        seen.delete(removed);
        peak = getResultPeak();
      }
      resultStack.push(char);
      seen.add(char);
    }
  }

  function getResultPeak() {
    return resultStack.length && resultStack[resultStack.length - 1];
  }

  return resultStack.join("");
};
