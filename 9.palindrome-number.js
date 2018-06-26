/**
 * Math
 *
 * Determine whether an integer is a palindrome.
 * An integer is a palindrome when it reads the same backward as forward.
 *
 * Input: 121
 * Output: true
 *
 * Input: -121
 * Output: false
 *
 * Input: 10
 * Output: false
 * */

const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let result = 0;
    let input = x;

    while(x) {
        let lastDigit = x % 10;
        x = (x - lastDigit) / 10;
        result = result * 10 + lastDigit;
    }

    return result === input;
};

const result = isPalindrome(121000);
console.log(result);