/**
/** 116. Populating Next Right Pointers in Each Node
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
 * The binary tree has the following definition:
* struct Node {
*   int val;
*   Node *left;
*   Node *right;
*   Node *next;
* }
* Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
* Initially, all next pointers are set to NULL.
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 *
 */

// Recursive. Levels Approach. time O(N), space O(N)
var connect = function (root) {
  const levels = [];

  visit(root, 0);

  function visit(node, level) {
    if (!node) {
      return;
    }

    if (levels.length === level) {
      levels.push([]);
    }

    const levelArr = levels[level];
    levelArr.push(node);

    const prev = levelArr[levelArr.length - 2];
    if (prev) {
      prev.next = node;
    }

    if (node.left) {
      visit(node.left, level + 1);
    }

    if (node.right) {
      visit(node.right, level + 1);
    }
  }

  return root;
};

// Recursive. Root next pointer approach. time O(N), space O(1)
var connect = function (root) {
  if (!root) {
    return root;
  }

  if (root.left) {
    root.left.next = root.right;
  }

  if (root.right && root.next) {
    root.right.next = root.next.left;
  }

  connect(root.left);
  connect(root.right);

  return root;
};
