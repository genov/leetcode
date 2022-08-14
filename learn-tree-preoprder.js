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

// Recursive
var preorderTraversal = function (root) {
  const result = [];

  visitNode(root);

  function visitNode(node) {
    if (!node) {
      return;
    }

    result.push(node.val);
    visitNode(node.left);
    visitNode(node.right);
  }

  return result;
};

// Iterative
var preorderTraversal = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const stack = [root];

  while (stack.length) {
    const el = stack.pop();
    result.push(el.val);

    if (el.right) {
      stack.push(el.right);
    }

    if (el.left) {
      stack.push(el.left);
    }
  }

  return result;
};
