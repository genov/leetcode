/**
 * 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 * https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
 */

var modifyString = function (s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?") {
      replaceAt(i);
    }
  }

  return s;

  // Pick character from alphabet which diferent from previous and next symbol.
  function replaceAt(index) {
    let charIndex = 0;
    while (
      alphabet[charIndex] === s[index - 1] ||
      alphabet[charIndex] === s[index + 1]
    ) {
      charIndex++;
    }

    s = s.slice(0, index) + alphabet[charIndex] + s.slice(index + 1);
  }
};
