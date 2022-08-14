/**
 *
 * 459. Repeated Substring Pattern
 * Given a non-empty string check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 */
var repeatedSubstringPattern = function (s) {
  const size = s.length;

  for (let i = 0; i < s.length / 2; i++) {
    let pattern = s.slice(0, i + 1);

    if (pattern === s) {
      return false;
    }

    if (size % pattern.length > 0) {
      continue;
    }

    if (pattern.repeat(size / pattern.length) === s) {
      return true;
    }
  }

  return false;
};

console.log(repeatedSubstringPattern("adada"));
