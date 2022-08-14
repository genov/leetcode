/**
 * 687. Longest Univalue Path
 *
 * https://leetcode.com/problems/longest-univalue-path/
 */

// Leetcode apporach (linke mine by optimized)
var longestUnivaluePath = function (root) {
  let longest = 0; // On each iteration recalculate result;

  if (!root) {
    return 0;
  }

  findLongest(root, root.val);

  return longest;

  function findLongest(root, parentValue) {
    if (!root) {
      return 0;
    }

    // Get height of LEFT branch.
    const leftHeight = findLongest(root.left, root.val);

    // Get heigth of RIGHT branch.
    const rightHeight = findLongest(root.right, root.val);

    // Update global result. L + R because path can go through root node.
    longest = Math.max(longest, leftHeight + rightHeight);

    // Return univalue tree height starting from current node.
    if (root.val == parentValue) {
      return 1 + Math.max(leftHeight, rightHeight);
    }

    // 0 if node value does not match parent value.
    return 0;
  }
};

// Mine approach
var longestUnivaluePath = function (root) {
  let longest = 0;

  findLongest(root);

  return longest;

  function findLongest(root) {
    if (!root) {
      return;
    }

    // Get height of LEFT branch.
    const leftHeight = getUnivalueHeight(root.left, root);

    // Get heigth of RIGHT branch.
    const rightHeight = getUnivalueHeight(root.right, root);

    // Update golbal result.
    longest = Math.max(longest, leftHeight + rightHeight);

    // Repeat logic for left and right branches.
    findLongest(root.left);
    findLongest(root.right);
  }

  /**
   * Calculate univalue tree height
   * (Same as regular tree height with 1 update).
   */
  function getUnivalueHeight(root, parent) {
    if (!root) {
      return 0;
    }

    // Univalue update. Height is 0 when value does not match parent value.
    if (root.val !== parent.val) {
      return 0;
    }

    return (
      1 +
      Math.max(
        getUnivalueHeight(root.left, root),
        getUnivalueHeight(root.right, root)
      )
    );
  }
};
