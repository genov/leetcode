/**
 * 250. Count Univalue Subtrees
 * Given the root of a binary tree, return the number of uni-value subtrees.
 * A uni-value subtree means all nodes of the subtree have the same value.
 * https://leetcode.com/problems/count-univalue-subtrees/
 */

var countUnivalSubtrees = function (root) {
  let counter = 0;

  if (!root) {
    return 0;
  }

  isUnival(root);

  return counter;

  function isUnival(node) {
    if (!node) {
      return false;
    }

    if (!node.left && !node.right) {
      counter++;
      return true;
    }

    const isLeftUnival =
      !node.left || (isUnival(node.left) && node.val === node.left.val);
    const isRightUnival =
      !node.right || (isUnival(node.right) && node.val === node.right.val);

    if (isLeftUnival && isRightUnival) {
      counter++;
    }

    return isLeftUnival && isRightUnival;
  }
};
