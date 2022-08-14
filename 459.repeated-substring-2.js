/**
 *
 * 459. Repeated Substring Pattern
 * Given a non-empty string check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 */
var repeatedSubstringPattern = function (s = "") {
  const ss = s + s;
  return ss.slice(1, ss.length - 1).includes(s);
};
