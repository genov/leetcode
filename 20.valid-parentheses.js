/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 */
var isValid = function (s) {
  if (s.length % 2 > 0) {
    return false;
  }

  const lib = { "{": "}", "[": "]", "(": ")" };
  const stack = [];

  for (let sym of s) {
    // For each opening char add it's closing to stack.
    if (lib[sym]) {
      stack.push(lib[sym]);
    } else {
      // If met closing char -> it should be in peak in stack.
      // Remove it from stack.
      if (sym === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
};

// Input: "()"
// Output: true
const result = isValid("()");
console.log("1", result);

// Input: "()[]{}"
// Output: true
const result2 = isValid("()[]{}");
console.log("2", result2);

// Input: "(]"
// Output: false
const result3 = isValid("(]");
console.log("3", result3);

// Input: "([)]"
// Output: false
const result4 = isValid("([)]");
console.log("4", result4);

// Input: "(("
// Output: false
const result5 = isValid("((");
console.log("5", result5);
0;
