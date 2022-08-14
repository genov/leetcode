/**
 * 843. Guess the Word
 *
 * https://leetcode.com/problems/guess-the-word/
 */

var findSecretWord = function (wordlist, master) {
  const guesses = new Map();
  let word = wordlist[0];

  for (let i = 0; i < 10; i++) {
    const score = master.guess(word);

    // Exit if got max points, it is the RESULT.
    if (score === 6) {
      break;
    }

    // Set guess score only for at least 1 character matching words.
    if (score > 0) {
      guesses.set(word, score);
    }

    // Update dictionary based on returned score.
    // If score === 0, leave all words that has 0 character in common with last guess.
    // If score > 0, leaved all words that match scores from guesses.
    wordlist = wordlist.filter((nextWord) => {
      return score > 0
        ? matchesGuesses(nextWord, guesses)
        : getScore(nextWord, word) === 0;
    });

    // Pick next word randomly from dictionary.
    const index = Math.round(Math.random() * (wordlist.length - 1));

    word = wordlist[index];
  }

  // Helper returns true if word has all common words from guesses.
  function matchesGuesses(word, guesses) {
    return [...guesses].every(
      ([key, value]) => getScore(key, word) === value && value > 0
    );
  }

  // Helper to get matching scrore.
  function getScore(word, key) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === key[i]) {
        score++;
      }
    }

    return score;
  }
};
