var solveSudoku = function (board) {
  // 1. Create 3 list of hash maps for rows, cols and 3x3 grids states.
  const rows = new Array(9).fill().map(() => ({}));
  const cols = new Array(9).fill().map(() => ({}));
  const grids = new Array(9).fill().map(() => ({}));

  // 2. Create initial state of seen numbers.
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];

      if (value !== ".") {
        const gIdx = getGridIdx(row, col);

        rows[row][value] = true;
        cols[col][value] = true;
        grids[gIdx][value] = true;
      }
    }
  }

  // Start backtracking from the first cell.
  backtrack(0, 0, 1);

  function backtrack(row, col, num) {
    if (num > 9) {
      return false;
    }

    if (row > 8) {
      return true;
    }

    const nextRow = col === 8 ? row + 1 : row;
    const nextCol = (col + 1) % 9;

    if (board[row][col] === ".") {
      for (let i = 1; i < 10; i++) {
        if (isValidPoint(row, col, i)) {
          board[row][col] = i.toString();
          toggleState(row, col, i, true);

          const valid = backtrack(nextRow, nextCol, i);

          if (valid) {
            return true;
          }

          board[row][col] = ".";
          toggleState(row, col, i, false);
        }
      }
    } else {
      return backtrack(nextRow, nextCol, 1);
    }
  }

  function getGridIdx(row, col) {
    const gRow = Math.floor(row / 3);
    const gCol = Math.floor(col / 3);
    return gRow * 3 + gCol;
  }

  function toggleState(row, col, value, state) {
    rows[row][value] = state;
    cols[col][value] = state;
    grids[getGridIdx(row, col)][value] = state;
  }

  function isValidPoint(row, col, num) {
    if (rows[row][num]) return false;
    if (cols[col][num]) return false;
    if (grids[getGridIdx(row, col)][num]) return false;

    return true;
  }

  return board;
};
