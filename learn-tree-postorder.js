/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursive.
var postorderTraversal = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  visit(root);

  function visit(node) {
    if (!node) {
      return;
    }

    visit(node.left);
    visit(node.right);
    result.push(node.val);
  }

  return result;
};

// Iterative
var postorderTraversal = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const stack = [root];

  while (stack.length) {
    const el = stack.pop();
    result.unshift(el.val);
    if (el.left) {
      stack.push(el.left);
    }

    if (el.right) {
      stack.push(el.right);
    }
  }

  return result;
};
