/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();

  const textToKey = (text) => text.split("").sort().join("");

  for (let i = 0; i < strs.length; i++) {
    const key = textToKey(strs[i]);

    if (groups.has(key)) {
      groups.set(key, [...groups.get(key), strs[i]]);
    } else {
      groups.set(key, [strs[i]]);
    }
  }

  return [...groups.values()];
};
