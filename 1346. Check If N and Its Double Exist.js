/**
 * 1346. Check If N and Its Double Exist
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/
 */
var checkIfExist = function (arr) {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i] / 2] || hashMap[arr[i] * 2]) {
      return true;
    }

    hashMap[arr[i]] = true;
  }
  return false;
};
