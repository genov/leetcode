/**
 * 117. Populating Next Right Pointers in Each Node II
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 *
 * Given a binary tree
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 */

// Recursive approach (levels). time O(N), space O(N)
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

    const levelNodes = levels[level];
    levelNodes.push(node);

    const prevNode = levelNodes[levelNodes.length - 2];
    if (prevNode) {
      prevNode.next = node;
    }

    visit(node.left, level + 1);
    visit(node.right, level + 1);
  }

  return root;
};
