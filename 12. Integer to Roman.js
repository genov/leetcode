/**
 * 12. Integer to Roman (medium)
 * https://leetcode.com/problems/integer-to-roman/
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Input: 3
 * Output: "III"

 * Input: 4
 * Output: "IV"

 * Input: 9
 * Output: "IX"

 * Input: 58
 * Output: "LVIII"
 * Explanation: C = 100, L = 50, XXX = 30 and III = 3.
 */

const intToRoman = function (num) {
  let result = "";
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let i = 0; i <= decimal.length; i++) {
    while (num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }

  return result;
};

const result = intToRoman(3763);
console.log(result);
