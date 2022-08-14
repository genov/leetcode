/**
 * 50. Pow(x, n)
 *
 * Implement pow(x, n), which calculates x raised to the power n (i.e. xn).
 *
 * https://leetcode.com/problems/powx-n/
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n < 0) {
    return increment(1 / x, -n);
  }

  return increment(x, n);

  function increment(current, power) {
    if (power === 0) {
      return 1;
    }

    if (power === 1) {
      return current;
    }

    const isPowerOdd = power % 2 > 0;

    return isPowerOdd
      ? current * increment(current * current, (power - 1) / 2)
      : increment(current * current, power / 2);
  }
};
