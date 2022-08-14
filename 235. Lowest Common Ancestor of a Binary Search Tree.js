/**
 * 235. Lowest Common Ancestor of a Binary Search Tree (easy)
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 *
 * Time Complexity: O(N) Space Complexity: O(N)O(N)
 */

// Untilizing BST property we go
// - LEFT if both nodes are less than current
// - RIGHT if both bodes are bigger than current
// - IF one of the nodes equals current --> return this node becasuse the other node will found
//   in the left or right branch
var lowestCommonAncestor = function (root, p, q) {
  const parentVal = root.val;
  const pVal = p.val;
  const qVal = q.val;

  if (pVal < parentVal && qVal < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (pVal > parentVal && qVal > parentVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
