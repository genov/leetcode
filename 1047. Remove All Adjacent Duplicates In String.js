/**
 * 1047. Remove All Adjacent Duplicates In String
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */
var removeDuplicates = function (S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (stack.length && stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.join("");
};
