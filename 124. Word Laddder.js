/**
 * 127. Word Ladder
 * https://leetcode.com/problems/word-ladder/
 */

/**
 * Use BFS to find the shortest path level by level.
 * Use visited to avoid cycles.
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let numOfWords = 0;

  // Edge case when endword in not part of word list.
  if (!wordList.includes(endWord)) {
    return 0;
  }

  // Helper function for comparing two words.
  // Returns true if difference is only in 1 character.
  const isOneCharDiff = (original, next) => {
    let diffs = 0;

    for (let i = 0; i < original.length; i++) {
      if (original[i] !== next[i]) {
        diffs++;
      }

      if (diffs > 1) {
        return false;
      }
    }

    return true;
  };

  const queue = [beginWord];
  const visited = {};
  let size = 1;

  // Starting from beginWord find all word which are different in 1 character
  // AND not visited and chech against result and add them queue.
  while (queue.length) {
    // For each level we increase path length count.
    numOfWords++;

    size = queue.length;

    // Check all nodes at current level.
    // Push valid and not visited to queue.
    for (let i = 0; i < size; i++) {
      const word = queue.shift();

      for (let i = 0; i <= wordList.length; i++) {
        const next = wordList[i];

        if (!isOneCharDiff(word, next) || visited[next]) {
          continue;
        }

        if (next === endWord) {
          return numOfWords;
        }

        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return 0;
};

const math = {
  "+": (a, b) => a + b,
};

console.log(math["+"](1, 4));
