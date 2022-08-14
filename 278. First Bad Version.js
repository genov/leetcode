/**
 * 278. First Bad Version
 *
 * https://leetcode.com/problems/first-bad-version/
 */

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let version = -1;
    let start = 1;
    let end = n;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      const isBad = isBadVersion(mid);

      if (isBad) {
        version = mid;
      }

      if (isBad) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return version;
  };
};
