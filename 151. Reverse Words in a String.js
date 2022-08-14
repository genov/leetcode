/**
 * 151. Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */

// Extra space approach.
var reverseWords = function (s) {
  const words = [];

  for (let i = s.length - 1; i >= 0; i--) {
    while (s[i] === " ") {
      i--;
    }

    let end = i;
    while (s[i] !== " " && i >= 0) {
      i--;
    }

    const word = s.slice(i + 1, end + 1);
    word && words.push(word);
  }

  return words.join(" ");
};
