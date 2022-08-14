/**
 * 297. Serialize and Deserialize Binary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let serialized = "";

  visitNode(root);

  function visitNode(node) {
    if (!node) {
      serialized += "null ";
      return;
    }

    serialized += node.val + " ";

    visitNode(node.left);
    visitNode(node.right);
  }

  return serialized;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const values = data.split(" ");

  function buildTree() {
    const rootVal = values.shift();

    if (rootVal === "null" || !rootVal) {
      return null;
    }

    const root = new TreeNode(Number(rootVal));

    root.left = buildTree();
    root.right = buildTree();

    return root;
  }

  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
