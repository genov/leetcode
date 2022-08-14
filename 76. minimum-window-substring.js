/**
 * 76. Minimum Window Substring
 * Given two strings s and t, return the minimum window in s which will contain all the characters in t.
 * If there is no such window in s that covers all characters in t, return the empty string "".
 * Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
 * https://leetcode.com/problems/minimum-window-substring/
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tCounts = {};
  const sCounts = {};
  let start = 0;
  let end = 0;
  let minStart = 0;
  let minLength = null;
  let matchCounter = 0;

  // Count chars in pattern.
  for (let i = 0; i < t.length; i++) {
    tCounts[t[i]] = tCounts[t[i]] ? tCounts[t[i]] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    // Count all passing characters in s.
    sCounts[s[i]] = sCounts[s[i]] ? sCounts[s[i]] + 1 : 1;

    // Count s chars which match chars count in t.
    if (tCounts[s[i]] && sCounts[s[i]] <= tCounts[s[i]]) {
      matchCounter++;
    }

    // When window is valid start narrowing it down until it is invalid.
    // While narrowing decrease matchCounter for each matching character.
    const isWindowValid = matchCounter === t.length;
    if (isWindowValid) {
      while (matchCounter === t.length) {
        sCounts[s[start]]--;

        const passedMathingCharOnStart =
          tCounts[s[start]] && sCounts[s[start]] < tCounts[s[start]];
        if (passedMathingCharOnStart) {
          matchCounter--;
        }

        // Update resulting variables if currrent window is less than last recorded.
        if (!minLength || minLength > end - start + 1) {
          minStart = start;
          minLength = end - start + 1;
        }

        start++;
      }
    }

    end++;
  }

  return s.slice(minStart, minStart + minLength);
};

minWindow("qwerty", "wew");
