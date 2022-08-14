/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

// Recursive.
var preorder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  visit(root);

  function visit(node) {
    if (!node) {
      return;
    }

    result.push(node.val);

    for (const child of node.children || []) {
      visit(child);
    }
  }

  return result;
};

// Iterative.
var preorder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const stack = [root];
  while (stack.length) {
    const el = stack.pop();
    result.push(el.val);

    for (let i = el.children.length - 1; i >= 0; i--) {
      stack.push(el.children[i]);
    }
  }

  return result;
};
