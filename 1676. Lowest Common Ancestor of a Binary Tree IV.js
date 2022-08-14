/**
 * 1676. Lowest Common Ancestor of a Binary Tree IV
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/
 */

// Run FS recursively and count number of nodes in LEFT + in RIGHT + CURRENT as 1 OR 0
// It Sum equals to nodes length than LCA is found.
// Set result only if it is not set.
var lowestCommonAncestor = function (root, nodes) {
  const set = new Set(nodes);
  let lca = null;

  dfs(root);

  return lca;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    const foundInLeft = dfs(node.left);
    const foundInRight = dfs(node.right);
    const selfCount = set.has(node) ? 1 : 0;

    if (!lca && foundInLeft + foundInRight + selfCount === nodes.length) {
      lca = node;
    }

    return foundInLeft + foundInRight + selfCount;
  }
};
