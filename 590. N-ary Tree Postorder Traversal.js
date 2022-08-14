/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

// Recursive.
var postorder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  visit(root);

  function visit(node) {
    if (!node) {
      return;
    }

    for (const child of node.children || []) {
      visit(child);
    }

    result.push(node.val);
  }

  return result;
};

// Iterative.
var postorder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const stack = [root];

  while (stack.length) {
    const el = stack.pop();
    result.unshift(el.val);

    for (const child of el.children || []) {
      stack.push(child);
    }
  }

  return result;
};
