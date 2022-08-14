/**
 * 36. Valid Sudoku (medium)
 * time: O(1), space: O(1).
 * https://leetcode.com/problems/valid-sudoku/
 */

var isValidSudoku = function (board) {
  const rows = new Array(9).fill().map(() => ({}));
  const cols = new Array(9).fill().map(() => ({}));
  const squares = new Array(9).fill().map(() => ({}));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const value = board[row][col];

      if (value !== ".") {
        // Important! Defining index for 3x3 matrixes hashmap.
        const sRow = Math.floor(row / 3);
        const sCol = Math.floor(col / 3);
        const s = sRow * 3 + sCol;

        if (rows[row][value] || cols[col][value] || squares[s][value]) {
          return false;
        } else {
          rows[row][value] = true;
          cols[col][value] = true;
          squares[s][value] = true;
        }
      }
    }
  }

  return true;
};
