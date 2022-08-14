/**
 * 199. Binary Tree Right Side View
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */

// Approach:
// BFS level traversal and add the last node from each level to result.
var rightSideView = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const queue = [root];

  while (queue.length) {
    const size = queue.length;

    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level[level.length - 1]);
  }

  return result;
};

// DFS by level traversal approach.
var rightSideView = function (root) {
  const levels = [];

  dfs(root, 0);

  function dfs(node, level) {
    if (!node) {
      return;
    }

    if (!levels[level]) {
      levels.push([]);
    }

    levels[level].push(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  return levels.map((level) => level[level.length - 1]);
};
