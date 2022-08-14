/**
 * 515. Find Largest Value in Each Tree Row
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row/
 */
var largestValues = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    let largest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      largest = Math.max(node.val, largest);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(largest);
  }

  return result;
};
