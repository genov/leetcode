/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return 1;
    }

    if (!s.length) {
        return 0;
    }

    let p1 = 0;
    let p2 = 1;
    let map = {};
    map[s[p1]] = `${p1}`;
    let rS =s[p1];
    let tS = s[p1];

    while(p2 < s.length) {
        if (map[s[p2]]) {
            p1++;
            p2 = p1+1;
            map = { [s[p1]]: `${p1}` };
            tS = s[p1];
        } else {
            tS += s[p2];
            map[s[p2]] = `${p2}`;
            p2++;
        }

        if (rS.length < tS.length) {
            rS = tS;
        }
    }

    return rS.length;
};

const test = "aaaklkdlsooo"; // should return 3;
const result = lengthOfLongestSubstring(test);
console.log('Result: ', result);