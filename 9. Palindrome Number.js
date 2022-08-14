/**
 * 9. Palindrome Number (easy)
 * https://leetcode.com/problems/palindrome-number/
 * Determine whether an integer is a palindrome.
 * */

const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let result = 0;
  let input = x;

  while (x) {
    let lastDigit = x % 10;
    x = (x - lastDigit) / 10;
    result = result * 10 + lastDigit;
  }

  return result === input;
};

const result = isPalindrome(121000);
console.log(result);
