/**
 * 112. Path Sum
 * Given the root of a binary tree and an integer targetSum, return true if
 * the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 * https://leetcode.com/problems/path-sum/
 */

// Recursive.
var hasPathSum = function (root, targetSum) {
  let hasPathSum = false;

  checkPath(root, 0);

  return hasPathSum;

  function checkPath(node, sum) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right && sum + node.val === targetSum) {
      hasPathSum = true;
    }

    checkPath(node.left, sum + node.val);
    checkPath(node.right, sum + node.val);
  }
};

// Iterative.
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  const nodeStack = [root];
  const sumStack = [targetSum - root.val];

  while (nodeStack.length) {
    let node = nodeStack.pop();
    let currentSum = sumStack.pop();

    if (!node.left && !node.right && currentSum === 0) {
      return true;
    }

    if (node.left) {
      nodeStack.push(node.left);
      sumStack.push(currentSum - node.left.val);
    }

    if (node.right) {
      nodeStack.push(node.right);
      sumStack.push(currentSum - node.right.val);
    }
  }

  return false;
};
