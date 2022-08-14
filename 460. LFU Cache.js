/**
 * 460. LFU Cache (hard)
 * https://leetcode.com/problems/lfu-cache/
 */

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.min = -1;
  this.values = new Map(); // Keep stored values for keys.
  this.counts = new Map(); // Keeps use counts per key.
  this.countToKeySet = new Map(); // Maps use counts to Set of keys.
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  // Return -1 when key is not seen.
  if (!this.values.has(key)) {
    return -1;
  }

  // Get current use count for key,
  // increment key use count and remove key from set of previous use count
  const count = this.counts.get(key);
  this.counts.set(key, count + 1);
  this.countToKeySet.get(count).delete(key);

  // Create new Set if next use count has not keys yet.
  if (!this.countToKeySet.get(count + 1)) {
    this.countToKeySet.set(count + 1, new Set());
  }

  // If current (not new) use count has no keys and it was min - increment min use count.
  if (this.min === count && this.countToKeySet.get(count).size === 0) {
    this.min++;
  }

  // Add key to incremented use count set.
  this.countToKeySet.get(count + 1).add(key);

  // Return value for the key.
  return this.values.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity <= 0) {
    return;
  }

  // If inserted key was seen - do 'get' logic and update the value.
  // Return undefined.
  if (this.values.has(key)) {
    this.get(key);
    this.values.set(key, value);
    return;
  }

  // If cache is full:
  // Get set of keys with min use count.
  // Get first item from the Set.
  // Remove it from Set, values and use counts.
  if (this.values.size === this.capacity) {
    const removeKey = this.countToKeySet.get(this.min).values().next();
    this.countToKeySet.get(this.min).delete(removeKey);
    this.values.delete(removeKey);
    this.counts.delete(removeKey);
  }

  // Set min to 1 since new key is inserted.
  // Update values map and counts.
  this.min = 1;
  this.values.set(key, value);
  this.counts.set(key, 1);

  // Create new Set for the first time.
  if (!this.countToKeySet.has(1)) {
    this.countToKeySet.set(1, new Set());
  }

  // Add ket to use count ket set.
  this.countToKeySet.get(1).add(key);
};

var obj = new LFUCache(2);
var param_1 = obj.put(1, "a");
var param_1 = obj.put(1, "a");
var param_2 = obj.put(2, "b");
var param_2 = obj.put(3, "c");
console.group(obj.get(2));
