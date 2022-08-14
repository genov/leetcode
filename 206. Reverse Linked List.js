/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 */

// Iterative
var reverseList = function (head) {
  if (!head) {
    return null;
  }

  const stack = [];

  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }

  head = stack[stack.length - 1];
  while (stack.length) {
    const el = stack.pop();
    el.next = stack[stack.length - 1] || null;
  }

  return head;
};

// Recursive
