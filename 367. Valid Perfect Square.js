/**
 * 367. Valid Perfect Square (easy)
 *
 * https://leetcode.com/problems/valid-perfect-square/
 */

function squareRoot(number) {
  let square = 1;
  let i = 0;

  while (true) {
    i++;

    square = (number / square + square) / 2;

    console.log("square", square);

    if (i == number + 1) {
      break;
    }
  }

  return square;
}

console.log(squareRoot(25));
