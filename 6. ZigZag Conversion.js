/**
 * 6. ZigZag Conversion (medium) (O(N));
 * https://leetcode.com/problems/zigzag-conversion/
 */

// Solution:
// Define empty array and fill it with number for rows empty strings.
// Result will be join of array.
// Define direction variable(1 for Down, -1 for UP);
// Iterate through the string and push curretn char to array row and:
// - if current row === number of rows - 1 - > set direction to - 1;
// - if current row === 0 => set direction back to 1;
// - increment current row with current direction value (1/-1).
//
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const rows = new Array(s.length).fill("");
  let row = 0;
  let direction = 1;

  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];

    if (row === numRows - 1) {
      direction = -1;
    } else if (row === 0) {
      direction = 1;
    }

    row += direction;
  }

  return rows.join("");
};
