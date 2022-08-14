/**
 * 54. Spiral Matrix
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * https://leetcode.com/problems/spiral-matrix/
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 1) {
    return matrix[0];
  }

  const directions = ["right", "down", "left", "top"];
  const moves = {
    right: ([row, col]) => [row, col + 1],
    down: ([row, col]) => [row + 1, col],
    left: ([row, col]) => [row, col - 1],
    top: ([row, col]) => [row - 1, col],
  };
  const result = [];
  const visited = {};
  let position = [0, 0];
  let direction = 0;

  while (position) {
    const [row, col] = position;
    const el = matrix[row][col];
    result.push(el);
    visited[position] = true;
    position = getNextPosition(position, direction);
  }

  function getNextPosition(currentPosition, nextDirection, checked = 0) {
    if (checked === 4) {
      return null;
    }

    const move = moves[directions[nextDirection]];
    const [row, col] = move(currentPosition);

    if (
      matrix[row] &&
      typeof matrix[row][col] === "number" &&
      !visited[[row, col]]
    ) {
      direction = nextDirection;
      return [row, col];
    }

    nextDirection = directions[nextDirection + 1] ? nextDirection + 1 : 0;
    return getNextPosition(currentPosition, nextDirection, checked + 1);
  }

  return result;
};
