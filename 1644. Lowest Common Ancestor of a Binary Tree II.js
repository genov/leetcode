/**
 * 1644. Lowest Common Ancestor of a Binary Tree II
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
 */

// Uses classic approach for finding LCA.
var lowestCommonAncestor = function (root, p, q) {
  let result = null;

  find(root, p, q);

  function find(root, p, q) {
    if (!root) {
      return false;
    }

    const left = find(root.left, p, q) ? 1 : 0;
    const right = find(root.right, p, q) ? 1 : 0;
    const mid = root === p || root === q ? 1 : 0;

    if (left + right + mid >= 2) {
      result = root;
    }

    return left + right + mid > 0;
  }

  return result;
};
