/**
 * 295. Find Median from Data Stream
 *
 * https://leetcode.com/problems/find-median-from-data-stream/
 */

var MedianFinder = function () {
  this.stream = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.stream.length) {
    this.stream.push(num);
  } else if (this.stream.length === 1) {
    if (this.stream[0] <= num) {
      this.stream.push(num);
    } else {
      this.stream.unshift(num);
    }
  } else {
    let start = 0;
    let end = this.stream.length;

    // Use Binary Insertion Sort to add new number and maintain sorted order.
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (num <= this.stream[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    this.stream.splice(start, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // Find mediam dependant on Odd/Even length of current stream size.
  if (this.stream.length % 2 === 0) {
    return (
      (this.stream[this.stream.length / 2 - 1] +
        this.stream[this.stream.length / 2]) /
      2
    );
  } else {
    return this.stream[Math.floor(this.stream.length / 2)];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
