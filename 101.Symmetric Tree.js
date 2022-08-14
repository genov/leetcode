/**
 * 101. Symmetric Tree
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * https://leetcode.com/problems/symmetric-tree/
 */

// Recursive.
var isSymmetric = function (root) {
  return isMirror(root, root);

  function isMirror(nodeA, nodeB) {
    if (!nodeA && !nodeB) {
      return true;
    }

    if (!nodeA || !nodeB) {
      return false;
    }

    return (
      nodeA.val === nodeB.val &&
      isMirror(nodeA.right, nodeB.left) &&
      isMirror(nodeA.left, nodeB.right)
    );
  }
};

// Iterative.
var isSymmetric = function (root) {
  if (!root || (!root.left && !root.right)) {
    return true;
  }

  return isMirror(root, root);

  function isMirror(nodeA, nodeB) {
    const queue = [nodeA, nodeB];

    while (queue.length) {
      const elA = queue.shift();
      const elB = queue.shift();

      if (!elA && !elB) {
        continue;
      }

      if (!elA || !elB) {
        return false;
      }

      if (elA.val !== elB.val) {
        return false;
      }

      queue.push(elA.right);
      queue.push(elB.left);
      queue.push(elA.left);
      queue.push(elB.right);
    }

    return true;
  }
};
