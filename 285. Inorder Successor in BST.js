/**
 * 285. Inorder Successor in BST
 *
 * https://leetcode.com/problems/inorder-successor-in-bst/
 */

var inorderSuccessor = function (root, p) {
  const nodes = [];

  dfs(root);

  function dfs(node) {
    if (!node) {
      return;
    }

    dfs(node.left);

    if (node === p || nodes.length === 1) {
      nodes.push(node);
    }

    dfs(node.right);
  }

  return nodes[1] || null;
};
