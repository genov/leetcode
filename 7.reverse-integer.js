/*
 * Math
 */

function reverseInt(x) {
    let inputArr = Math.abs(x).toString().split('');
    let i = inputArr.length - 1;
    let resultArr = [];
    let j = 0;
    let skipZero = true;

    while (i >=0) {
        if (inputArr[i] === 0 && skipZero) {
            i--;
            j++;
            continue;
        }

        resultArr[j] = inputArr[i];
        skipZero = false;

        i--;
        j++;
    }

    if (i === -1) {
        let result = +resultArr.join('');

        if (result > 0x7FFFFFFF) {
            return 0;
        }

        return x < 0 ? -result : result;
    }
}

const result = reverseInt(-324550000);
console.log(result);