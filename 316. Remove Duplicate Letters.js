/**
 * 316. Remove Duplicate Letters
 * https://leetcode.com/problems/remove-duplicate-letters/
 */
var removeDuplicateLetters = function (s) {
  const resultStack = [];
  const seen = new Set();
  const lastOccur = {};

  for (let i = 0; i < s.length; i++) {
    lastOccur[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!seen.has(char)) {
      let resultPeek =
        resultStack.length && resultStack[resultStack.length - 1];

      while (resultPeek && char < resultPeek && lastOccur[resultPeek] > i) {
        const removed = resultStack.pop();
        seen.delete(removed);
        resultPeek = resultStack[resultStack.length - 1];
      }

      resultStack.push(char);
      seen.add(char);
    }
  }

  return resultStack.join("");
};
