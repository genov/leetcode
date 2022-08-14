/**
 *  100. Same Tree
 * https://leetcode.com/problems/same-tree/
 */
var isSameTree = function (p, q) {
  function checkTrees(nodeA, nodeB) {
    if (!nodeA && !nodeB) {
      return true;
    }

    if (!nodeA || !nodeB || nodeA.val !== nodeB.val) {
      return false;
    }

    return (
      nodeA.val === nodeB.val &&
      checkTrees(nodeA.left, nodeB.left) &&
      checkTrees(nodeA.right, nodeB.right)
    );
  }

  return checkTrees(p, q);
};
