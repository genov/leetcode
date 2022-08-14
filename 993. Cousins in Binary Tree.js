/**
 * 993. Cousins in Binary Tree
 *
 * https://leetcode.com/problems/cousins-in-binary-tree/
 */

// Solution: find depth and parent reference for x and y and compare it.
var isCousins = function (root, x, y) {
  let xData;
  let yData;

  dfs(root, x, y, -1, null);

  function dfs(node, x, y, depth, parent) {
    if (!node) {
      return null;
    }

    if (node.val === x) {
      xData = { depth: depth + 1, parent };
    }

    if (node.val === y) {
      yData = { depth: depth + 1, parent };
    }

    dfs(node.left, x, y, depth + 1, node);
    dfs(node.right, x, y, depth + 1, node);
  }

  return xData.depth === yData.depth && xData.parent !== yData.parent;
};
