/**
 * 443. String Compression
 * https://leetcode.com/problems/string-compression/
 */
var compress = function (chars) {
  let n = chars.length;
  let current = 0;

  while (current < n) {
    let s = "";
    let next = current + 1;
    let count = 1;

    // Count repeating numbers.
    while (chars[current] === chars[next] && next < n) {
      count++;
      next++;
    }

    // Compress counts.
    if (count > 1) {
      s = s + chars[current] + count;
    } else {
      s = s + chars[current];
    }

    // Split result to characters and push to the end.

    chars.push(...s.split(""));

    current = current + count;
  }

  // Remove original array.
  chars.splice(0, n);

  return chars.length;
};
