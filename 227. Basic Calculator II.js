/**
 * 227. Basic Calculator II
 *
 * https://leetcode.com/problems/basic-calculator-ii/
 */

var calculate = function (s) {
  const stack = [];
  let currentNumber = 0;
  let operation = "+";
  const isOperor = (char) =>
    char == "+" || char === "-" || char === "/" || char === "*";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== " " && Number(char) >= 0) {
      currentNumber = currentNumber * 10 + Number(char);
    }

    if (isOperor(char) || i === s.length - 1) {
      if (operation === "-") {
        stack.push(-currentNumber);
      } else if (operation === "+") {
        stack.push(currentNumber);
      } else if (operation === "*") {
        stack.push(stack.pop() * currentNumber);
      } else if (operation === "/") {
        stack.push(Math.trunc(stack.pop() / currentNumber));
      }
      operation = char;
      currentNumber = 0;
    }
  }

  const result = stack.reduce((sum, num) => {
    return sum + num;
  }, 0);

  return result;
};
