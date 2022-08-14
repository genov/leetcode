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
var inorderTraversal = function (root) {
  const result = [];

  visitNode(root);

  function visitNode(node) {
    if (!node) {
      return;
    }

    visitNode(node.left);
    result.push(node.val);
    visitNode(node.right);
  }

  return result;
};

// Iterative.
var inorderTraversal = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
};
