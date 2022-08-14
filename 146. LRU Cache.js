/**
 * 146. LRU Cache (medium)
 * https://leetcode.com/problems/lru-cache/
 */

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const cached = this.map.get(key);

  if (cached >= 0) {
    this.map.delete(key);
    this.map.set(key, cached);
    return cached;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // this.get.updates the queue.
  if (this.get(key) >= 0) {
    this.map.set(key, value);
    return;
  }

  // If full - Remove LRU.
  if (this.map.size === this.capacity) {
    const lru = Array.from(this.map.keys())[0];
    this.map.delete(lru);
  }

  // Add new item.
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
