/**
 * 604. Design Compressed String Iterator
 * https://leetcode.com/problems/design-compressed-string-iterator/
 */

/**
 * @param {string} compressedString
 */
var StringIterator = function (compressedString) {
  this.compressedString = compressedString;
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {
  if (!this.compressedString.length) {
    return " ";
  }

  let start = 0;
  let end = 1;

  while (Number(this.compressedString[end]) >= 0) {
    end++;
  }

  const next = this.compressedString.slice(start, end);
  const repeats = Number(next.slice(1));
  this.compressedString = this.compressedString.slice(end);

  if (repeats > 1) {
    this.compressedString = next[0] + (repeats - 1) + this.compressedString;
  }

  return next[0];
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
  return !!this.compressedString.length;
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
