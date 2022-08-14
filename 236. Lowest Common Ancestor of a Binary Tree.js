/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes p and q as the lowest node
 *  in T that has both p and q as descendants (where we allow a node to be a descendant
 *  of itself).”
 */

// Recursive (3 flags approach);
var lowestCommonAncestor = function (root, p, q) {
  let result = null;

  findAncestor(root, p, q);

  function findAncestor(node, p, q) {
    if (!node) {
      return false;
    }

    const left = findAncestor(node.left, p, q) ? 1 : 0;
    const right = findAncestor(node.right, p, q) ? 1 : 0;
    const mid = node === p || node === q ? 1 : 0;

    if (left + right + mid >= 2) {
      result = node;
    }

    return left + right + mid > 0;
  }

  return result;
};

// Recursive (my approach - find two paths with preorder DFS, then find common last ancestor.
var lowestCommonAncestor = function (root, p, q) {
  let pPath = [];
  let qPath = [];

  // Find paths for p & q.
  findPaths(root);

  // Find common key.
  let result;
  const pPathArr = pPath.split(">");
  const qPathArr = qPath.split(">");
  while (pPathArr.length || qPathArr.length) {
    const pEl = pPathArr.shift();
    const qEl = qPathArr.shift();

    if (pEl && qEl && pEl === qEl) {
      result = pEl;
    }
  }

  return findNode(root, result);

  // Find node in BT by key.
  function findNode(node, key) {
    if (!node) {
      return;
    }

    if (node.val === Number(key)) {
      return node;
    }

    return findNode(node.left, key) || findNode(node.right, key);
  }

  // Find paths for p and q.
  function findPaths(node, path = "") {
    if (!node) {
      return;
    }

    path = path + ">" + node.val;

    if (node.val === p.val) {
      pPath = path;
    }

    if (node.val === q.val) {
      qPath = path;
    }

    findPaths(node.left, path);
    findPaths(node.right, path);
  }
};
