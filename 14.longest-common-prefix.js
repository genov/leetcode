/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    if (!prefix) {
        return '';
    }

    for (let i=1; i < strs.length; i++) {
        if (prefix === '') {
            break;
        }

        for (let j=0; j < prefix.length; j++) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.substring(0, j);
            }
        }
    }

    return prefix;
};

// Should return 'fl';
const result = longestCommonPrefix(['flowers', 'flower', 'flight', 'flow']);
console.log(result);