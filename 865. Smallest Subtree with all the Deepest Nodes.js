/**
 * 865. Smallest Subtree with all the Deepest Nodes
 * https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
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
 * @return {TreeNode}
 */

// Solution includes two phases:
// 1. Create map, run DFS and store all depths for each node, also store maximum depth.
// 2. Run dfs again and:
//    - if node has max depth return node.
//    - if L and R have max depth -> retun node
//    - if L or R has max depth -return L or R
//    - else return null.

var subtreeWithAllDeepest = function (root) {
  let maxDepth = -1;
  const depths = new Map();

  dfs(root, -1);

  return getSubtree(root);

  function dfs(node, depth) {
    if (!node) {
      return;
    }

    const currentDepth = depth + 1;
    depths.set(node, currentDepth);
    maxDepth = Math.max(maxDepth, currentDepth);

    dfs(node.left, currentDepth);
    dfs(node.right, currentDepth);
  }

  function getSubtree(node) {
    if (!node || depths.get(node) === maxDepth) {
      return node;
    }

    const left = getSubtree(node.left);
    const right = getSubtree(node.right);

    if (left && right) {
      return node;
    }

    if (left) return left;
    if (right) return right;

    return null;
  }
};
