/**
 * 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 *
 * O(N)
 */

// Use stack, go backwards.
var dailyTemperatures = function (T) {
  const results = [];
  const stack = [];

  // Start from the last element and go backwards.
  for (let i = T.length - 1; i >= 0; i--) {
    // Remove elements from stack untill top is bigger.
    while (stack.length && stack[stack.length - 1].value <= T[i]) {
      stack.pop();
    }

    // Set 0 is stack is empty.
    if (!stack.length) {
      results[i] = 0;
    } else {
      // Since we got last stack element that is bigger than current - set results as indexes difference.
      results[i] = stack[stack.length - 1].index - i;
    }

    // Add element to stack as always.
    stack.push({
      value: T[i],
      index: i,
    });
  }

  return results;
};
