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
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };
    const inputArr = s.split('');
    let i = 0;
    let result = 0;

    if (romans[s]) {
        return romans[s];
    }

    while (i < inputArr.length) {
        if ((inputArr[i] === 'I' || inputArr[i] === 'X' || inputArr[i] === 'C')
            && romans[inputArr[i] + inputArr[i+1]]) {
            result = result + romans[inputArr[i] + inputArr[i+1]];
            i++;
        } else {
            result = result + romans[inputArr[i]];
        }
        i++;
    }

    return result;
};

const result = romanToInt('VIII');
console.log(result);