/*
 * 7. Reverse Integer (easy)
 * https://leetcode.com/problems/reverse-integer/
 */

const reverse = function (x) {
  let result = 0;

  while (x) {
    // Always gives the last digit:  >= 0.
    let lastDigit = x % 10;

    // Decrease input X by lastDigit and remove last 0.
    x = (x - lastDigit) / 10;

    // increate previous result by 10 and add last digit.
    result = result * 10 + lastDigit;
  }

  // Edge cases for 32-but integer.
  if (result >= 2147483647 || result <= -2147483647) {
    return 0;
  }

  return result;
};
