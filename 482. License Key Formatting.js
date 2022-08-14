/**
 * 482. License Key Formatting
 * https://leetcode.com/problems/license-key-formatting/
 */
var licenseKeyFormatting = function (S, K) {
  let result = ""; // Holds result.
  let group = ""; // Holds current group.

  // Backward iteration.
  for (let i = S.length - 1; i >= 0; i--) {
    // Add every char except dash.
    if (S[i] !== "-") {
      group = S[i] + group;
    }

    // Add each K-size group and last non-empty group to result.
    if (group.length === K || (i === 0 && group.length)) {
      result = group.toUpperCase() + `${result ? "-" : ""}` + result;

      // Clean up after adding group.
      group = "";
    }
  }

  return result;
};
