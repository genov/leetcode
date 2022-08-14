/**
 * 102. Binary Tree Level Order Traversal
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

// Iterative.
var levelOrder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const queue = [root];
  let count = 1;

  while (queue.length) {
    const elements = queue.splice(0, count);
    result.push(elements.map((el) => el.val));
    const nextElements = elements.flatMap((el) =>
      [el.left, el.right].filter(Boolean)
    );
    count = nextElements.length;
    queue.push(...nextElements);
  }

  return result;
};

// Recursive
var levelOrder = function (root) {
  const levels = [];

  if (!root) {
    return levels;
  }

  visit(root, 0);

  function visit(node, level) {
    if (levels.length === level) {
      levels.push([]);
    }

    levels[level].push(node.val);

    if (node.left) {
      visit(node.left, level + 1);
    }

    if (node.right) {
      visit(node.right, level + 1);
    }
  }

  return levels;
};
