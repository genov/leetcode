/**
 * 150. Evaluate Reverse Polish Notation
 *
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

var evalRPN = function (tokens) {
  // Create operators dictionary.
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.trunc(a / b),
    "*": (a, b) => a * b,
  };

  // Stack will keep results.
  const stack = [];

  for (const token of tokens) {
    // When see operators:
    // - take 2 lask items from stack;
    // - perform operation;
    // - pus result to stack.
    if (operators[token]) {
      const y = stack.pop();
      const x = stack.pop();
      stack.push(operators[token](x, y));
    } else {
      // Add number value to stack.
      stack.push(Number(token));
    }
  }

  return stack[0]; // Should contain only 1 element.
};
