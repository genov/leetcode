/**
 * 1650. Lowest Common Ancestor of a Binary Tree III
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
 */

var lowestCommonAncestor = function (p, q) {
  const seen = new Set();

  let pParent = p;
  while (pParent) {
    seen.add(pParent);
    pParent = pParent.parent;
  }

  let qParent = q;
  while (qParent) {
    if (seen.has(qParent)) {
      return qParent;
    }

    qParent = qParent.parent;
  }
};
