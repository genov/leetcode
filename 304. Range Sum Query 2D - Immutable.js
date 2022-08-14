/**
 * 304. Range Sum Query 2D - Immutable
 */

// Fast approach
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.sums = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    this.sums[row] = [];
    for (let col = 0; col < cols; col++) {
      const leftSum = col ? this.sums[row][col - 1] : 0;
      const topSum = row ? this.sums[row - 1][col] : 0;
      const diff = row && col ? this.sums[row - 1][col - 1] : 0;
      this.sums[row][col] = leftSum + topSum - diff + matrix[row][col];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const fullSum = this.sums[row2][col2];
  const leftSum = this.sums[row2][col1 - 1] || 0;
  const topSum = row1 ? this.sums[row1 - 1][col2] : 0;
  const diff = row1 && col1 ? this.sums[row1 - 1][col1 - 1] : 0;

  return fullSum - leftSum - topSum + diff;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// Brute force approach
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;

  for (let row = row1; row <= row2; row++) {
    for (let col = col1; col <= col2; col++) {
      sum += this.matrix[row][col];
    }
  }

  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
