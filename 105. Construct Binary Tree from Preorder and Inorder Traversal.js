/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
* Given preorder and inorder traversal of a tree, construct the binary tree.
* https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
* Note:
* You may assume that duplicates do not exist in the tree.
*
* For example, given
*
* preorder = [3,9,20,15,7]
* inorder = [9,3,15,20,7]
* Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */

// Recursive
var buildTree = function (preorder, inorder) {
  let currentRootIndex = 0; // 0 for PreORder, N-1 for Post Order
  const inOrderIndexMap = {};

  for (let i = 0; i < inorder.length; i++) {
    inOrderIndexMap[inorder[i]] = i;
  }

  return buildSubtree(0, preorder.length - 1);

  function buildSubtree(left, right) {
    if (left > right) {
      return null;
    }

    const rootVal = preorder[currentRootIndex];
    const root = new TreeNode(rootVal);

    currentRootIndex++;

    const index = inOrderIndexMap[rootVal];
    // Start from left in when PreOrder is source.
    // Start from right when PostOrder is source.
    root.left = buildSubtree(left, index - 1);
    root.right = buildSubtree(index + 1, right);

    return root;
  }
};
