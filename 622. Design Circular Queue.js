/**
 * 622. Design Circular Queue.
 * https://leetcode.com/problems/design-circular-queue/
 */

var MyCircularQueue = function (k) {
  this.size = 0;
  this.queue = new Array(k);
  this.tail = -1;
  this.head = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (!this.isFull()) {
    if (this.isEmpty()) {
      this.head++;
    }

    this.tail = (this.tail + 1) % this.queue.length;
    this.queue[this.tail] = value;
    this.size++;

    return true;
  } else {
    return false;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.isEmpty()) {
    this.size--;
    this.queue[this.head] = undefined;

    if (!this.isEmpty()) {
      this.head = (this.head + 1) % this.queue.length;
    }

    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
