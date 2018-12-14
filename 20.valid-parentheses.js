/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2 > 0) {
        return false;
    }

    const lib = {'{': '}', '[': ']', '(': ')'};

    let arr = [];

    for (let sym of s) {
        if (lib[sym]) {
            arr.unshift(lib[sym]);
        } else {
            if (sym === arr[0]) {
                arr.shift();
            } else {
                return false;
            }
        }
    }

    return !arr.length;
};

// Input: "()"
// Output: true
const result = isValid('()');
console.log('1', result);

// Input: "()[]{}"
// Output: true
const result2 = isValid('()[]{}');
console.log('2', result2);

// Input: "(]"
// Output: false
const result3 = isValid('(]');
console.log('3', result3);

// Input: "([)]"
// Output: false
const result4 = isValid('([)]');
console.log('4', result4);

// Input: "(("
// Output: false
const result5 = isValid('((');
console.log('5', result5);0