/**
 * 230. Kth Smallest Element in a BST (medium)
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

var kthSmallest = function (root, k) {
  let count = 0;

  // Perform in-order DFS traversal and count checked nodes.
  // Return when count === k.
  const traverse = function (node) {
    if (!node) {
      return;
    }

    // Check left branch.
    const left = traverse(node.left);

    // If it returns value exit with result.
    if (left >= 0) {
      return left;
    }

    count++;

    // Check curret node value.
    if (count === k) {
      return node.val;
    }

    // Check right branch.
    return traverse(node.right);
  };

  return traverse(root);
};
