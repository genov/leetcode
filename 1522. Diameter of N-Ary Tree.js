/**
 * 1522. Diameter of N-Ary Tree
 */

// Solution:
// At each tree node we find two heightest branches,
// compare its sum with longest Path and sotre if it's bigger.
// Trick is to maintain tow longest heights while finding each child heigth.

var diameter = function (root) {
  let longestPath = 0;

  getHeight(root);

  return longestPath;

  function getHeight(node) {
    if (!node.children.length) {
      return 0;
    }

    let maxHeight1 = 0;
    let maxHeight2 = 0;

    for (const child of node.children) {
      const height = getHeight(child) + 1;
      if (height > maxHeight1) {
        maxHeight2 = maxHeight1;
        maxHeight1 = height;
      } else if (height > maxHeight2) {
        maxHeight2 = height;
      }
    }

    longestPath = Math.max(maxHeight1 + maxHeight2, longestPath);

    return maxHeight1;
  }
};
