/**
 * Math, String
 *
 * Given an integer, convert it to a roman numeral.
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

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    let result = '';
    const romans = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M',
        '4': 'IV',
        '9': 'IX',
        '40': 'XL',
        '90': 'XC',
        '400': 'CD',
        '900': 'CM'
    };

    const numS = num.toString();

    for (let i=0; i< numS.length; i++) {
        const compl = Math.pow(10, (numS.length - 1) - i);
        const fullNum = numS[i] * compl;

        if (romans[fullNum]) {
            result += romans[fullNum];
        } else {
            if (+numS[i] < 4) {
                result += romans[compl].repeat(numS[i]);
            } else {
                result += romans[5*compl] +romans[compl].repeat(numS[i] - 5);
            }
        }
    }

    return result;
};

const result = intToRoman(3);
console.log(result);