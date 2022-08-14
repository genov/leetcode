/**
 * 211. Design Add and Search Words Data Structure.
 *
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (let char of word) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }

  node.isWord = true;
};

WordDictionary.prototype.dfs = function (word, index, node) {
  if (index === word.length) return node.isWord === true;

  if (word[index] === ".") {
    for (let key in node) {
      if (this.dfs(word, index + 1, node[key])) return true;
    }
  } else {
    if (node[word[index]]) {
      return this.dfs(word, index + 1, node[word[index]]);
    }
  }

  return false;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.dfs(word, 0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
