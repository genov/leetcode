/**
 * 771. Jewels and Stones
 *
 * https://leetcode.com/problems/jewels-and-stones/
 */

var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (const stone of stones) {
    if (jewels.includes(stone)) {
      count++;
    }
  }

  return count;
};
