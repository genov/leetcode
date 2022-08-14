/**
 * 543. Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/
 */

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
 * @return {number}
 */

// Solution: using Tree Height calculation algorithm. Store maximum value of L + R heights;
var diameterOfBinaryTree = function (root) {
  let longestPath = 0;

  getHeight(root);

  return longestPath;

  function getHeight(node) {
    if (!node) {
      return 0;
    }

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    longestPath = Math.max(longestPath, left + right);

    return Math.max(left, right) + 1;
  }
};
