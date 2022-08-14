/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  const getMiddle = () => {
    if (nums.length % 2 === 0) {
      return nums.length / 2;
    } else {
      return (nums.length - 1) / 2;
    }
  };

  const tree = new TreeNode(nums[getMiddle()]);

  for (let i = 0; i < nums.length; i++) {
    let current = tree;
    while (current) {
      if (nums[i] < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new TreeNode(nums[i]);
          break;
        }
      } else if (nums[i] > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new TreeNode(nums[i]);
          break;
        }
      } else {
        break;
      }
    }
  }

  return tree;
};

console.log(sortedArrayToBST([1, 2, 3, 4, 5, 8]));
