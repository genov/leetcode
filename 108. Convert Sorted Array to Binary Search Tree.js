/**
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */

/** Recursive approach - On each node pick the middle using BS approach. */
var sortedArrayToBST = function (nums) {
  function insertInBST(start, end) {
    // Base case: return if current array is empty.
    if (start > end) {
      return null;
    }

    // Pick middle index same way as Binary Search approach.
    const mid = Math.round((start + end) / 2);
    const node = new TreeNode(nums[mid]);

    // Fill L node: go left from middle pointer skipping middle.
    node.left = insertInBST(start, mid - 1);

    // FillRL node: go Right from middle pointer skipping middle.
    node.right = insertInBST(mid + 1, end);

    // On each call return current node.
    return node;
  }

  return insertInBST(0, nums.length - 1);
};
