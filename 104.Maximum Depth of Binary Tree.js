/**
 * 104.  Maximum Depth of Binary Tree
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Top to bottom approach.
var maxDepth = function (root) {
  let result = 0;

  if (!root) {
    return result;
  }

  maxDepth(root, 1);

  function maxDepth(node, depth) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      result = Math.max(result, depth);
    }

    if (node.left) {
      maxDepth(node.left, depth + 1);
    }

    if (node.right) {
      maxDepth(node.right, depth + 1);
    }
  }

  return result;
};

// Bottom to top approach.
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const left = getMaxHeight(root.left);
  const right = getMaxHeight(root.right);

  return Math.max(left, right) + 1;
};

function getMaxHeight(node) {
  if (!node) {
    return 0;
  }

  return Math.max(getMaxHeight(node.left), getMaxHeight(node.right)) + 1;
}
