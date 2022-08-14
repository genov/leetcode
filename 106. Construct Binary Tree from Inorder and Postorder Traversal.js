/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 *
* Note:
* You may assume that duplicates do not exist in the tree.
* For example, given
* inorder = [9,3,15,20,7]
* postorder = [9,15,7,20,3]
* Return the following binary tree:
    3
   / \
  9  20
    /  \
   15   7
 */

// Recursive
var buildTree = function (inorder, postorder) {
  let postIndex = postorder.length - 1; // 0 for PreORder, N-1 for Post Order
  const inOrderIndexMap = {};

  for (let i = 0; i < inorder.length; i++) {
    inOrderIndexMap[inorder[i]] = i;
  }

  return buildSubtree(0, postorder.length - 1);

  function buildSubtree(left, right) {
    if (left > right) {
      return null;
    }

    const rootVal = postorder[postIndex];
    const root = new TreeNode(rootVal);

    postIndex--;

    const index = inOrderIndexMap[rootVal];
    // Start from left in when PreOrder is source.
    // Start from right when PostOrder is source.
    root.right = buildSubtree(index + 1, right);
    root.left = buildSubtree(left, index - 1);

    return root;
  }
};
