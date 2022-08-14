/**
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const lenOdd = expandAroundCenter(s, i, i);
    const lenEven = expandAroundCenter(s, i, i + 1);
    const max = Math.max(lenOdd, lenEven);

    if (max > end - start) {
      start = i - Math.floor((max - 1) / 2);
      end = i + Math.floor(max / 2);
    }
  }

  return s.slice(start, end + 1);
};

function expandAroundCenter(text, left, right) {
  while (left >= 0 && right < text.length && text[left] === text[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}
