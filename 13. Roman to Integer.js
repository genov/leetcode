/**
 * 13. Roman to Integer (easy)
 * https://leetcode.com/problems/roman-to-integer/
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Input: "III"
 * Output: 3
 *
 * Input: "IV"
 * Output: 4
 *
 * Input: "LVIII"
 * Output: 58
 * Explanation: C = 100, L = 50, XXX = 30 and III = 3.
 *
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 * */

const romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (s.length < 1) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // Case e.g 'IX' -> result = 0 (result) - 1 (s[i])
    if (romans[s[i]] < romans[s[i + 1]]) {
      result -= romans[s[i]];
    } else {
      // Base case when => result = -1 (result + 10) = 9. (IX)
      result += romans[s[i]];
    }
  }

  return result;
};
