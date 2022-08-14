/**
 * 8. String to Integer (atoi) (medium) (O(N)).
 * https://leetcode.com/problems/string-to-integer-atoi/
 */

// Solution:
// Iterate through the sting, take care of white spaces, "+", "-" and numbers.
// Break if:
// - white space AND digit is started
// - on non-numeretic character (isNaN(Number(char))).
var myAtoi = function (s) {
  const maxInterger = 2147483648;
  let result = 0;
  let digitStarted = false;
  let isNegative = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === " ") {
      if (digitStarted) break;
      if (!digitStarted) continue;
    }

    if (!digitStarted && (char === "-" || char === "+")) {
      isNegative = char === "-";
      digitStarted = true;
      continue;
    }

    if (!digitStarted && isNaN(Number(char))) {
      break;
    }

    if (Number(char) >= 0) {
      result = result * 10 + Number(char);
      digitStarted = true;
    } else {
      break;
    }
  }

  result = isNegative ? result * -1 : result;

  if (result <= -maxInterger) {
    return -maxInterger;
  }

  if (result >= maxInterger) {
    return maxInterger - 1;
  }

  return result;
};
