/**
 * 836. Rectangle Overlap
 * https://leetcode.com/problems/rectangle-overlap/
 *
 * https://www.geeksforgeeks.org/find-two-rectangles-overlap/
 */

var isRectangleOverlap = function (rec1, rec2) {
  const [x1rec1, y1rec1, x2rec1, y2rec1] = rec1;
  const [x1rec2, y1rec2, x2rec2, y2rec2] = rec2;

  if (x1rec1 >= x2rec2 || x1rec2 >= x2rec1) {
    return false;
  }

  if (y1rec1 >= y2rec2 || y1rec2 >= y2rec1) {
    return false;
  }

  if (
    x1rec1 === x2rec1 ||
    y1rec1 == y2rec1 ||
    x1rec2 === x2rec2 ||
    y1rec2 === y2rec2
  ) {
    return false;
  }

  return true;
};
