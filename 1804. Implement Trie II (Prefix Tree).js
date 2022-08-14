/**
 * 1804. Implement Trie II (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-ii-prefix-tree/
 */

var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let char of word) {
    if (node[char] == null) node[char] = { charCount: 0, wordCount: 0 };
    node[char].charCount++;
    node = node[char];
  }

  node.wordCount++;
};

Trie.prototype.traverse = function (word) {
  let node = this.root;

  for (let char of word) {
    if (node[char] == null) return null;
    node = node[char];
  }

  return node;
};
/**
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
  const node = this.traverse(word);
  return node ? node.wordCount : 0;
};

/**
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
  const node = this.traverse(prefix);
  return node ? node.charCount : 0;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
  let node = this.root;

  for (let char of word) {
    if (node[char] == null) return;
    node[char].charCount--;
    node = node[char];
  }

  node.wordCount--;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */
