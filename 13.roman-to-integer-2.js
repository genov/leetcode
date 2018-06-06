/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Input: "III"
 * Output: 3
 *
 * Input: "IV"
 * Output: 4
 *
 * Input: "LVIII"
 * Output: 58
 * Explanation: C = 100, L = 50, XXX = 30 and III = 3.
 *
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 * */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    if (s.length < 1) {
        return 0;
    }

    let result = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (romans[s[i]] < romans[s[i+1]]) {
            result -= romans[s[i]];
        } else {
            result += romans[s[i]];
        }
    }

    result += romans[s[s.length -1]];

    return result;
};

const result = romanToInt('VIII');
console.log(result);