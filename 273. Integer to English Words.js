/**
 * 273. Integer to English Words (hard)
 */
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const dictionary = [];
  dictionary[0] = "Zero";
  dictionary[1] = "One";
  dictionary[2] = "Two";
  dictionary[3] = "Three";
  dictionary[4] = "Four";
  dictionary[5] = "Five";
  dictionary[6] = "Six";
  dictionary[7] = "Seven";
  dictionary[8] = "Eight";
  dictionary[9] = "Nine";
  dictionary[10] = "Ten";
  dictionary[11] = "Eleven";
  dictionary[12] = "Twelve";
  dictionary[13] = "Thirteen";
  dictionary[14] = "Fourteen";
  dictionary[15] = "Fifteen";
  dictionary[16] = "Sixteen";
  dictionary[17] = "Seventeen";
  dictionary[18] = "Eighteen";
  dictionary[19] = "Nineteen";
  dictionary[20] = "Twenty";
  dictionary[30] = "Thirty";
  dictionary[40] = "Forty";
  dictionary[50] = "Fifty";
  dictionary[60] = "Sixty";
  dictionary[70] = "Seventy";
  dictionary[80] = "Eighty";
  dictionary[90] = "Ninety";
  dictionary[100] = "Hundred";
  dictionary[1000] = "Thousand";
  dictionary[1000000] = "Million";
  dictionary[1000000000] = "Billion";
  const dIndexes = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    1000,
    1000000,
    1000000000,
  ];

  return convert(num).trim();

  function convert(num) {
    if (num === 0) {
      return "Zero";
    }

    if (num < 100) {
      if (dictionary[num]) {
        return dictionary[num];
      }

      return dictionary[num - (num % 10)] + " " + dictionary[num % 10];
    }

    let divider = "";
    for (let i = dIndexes.length - 1; i >= 0; i--) {
      if (num >= dIndexes[i]) {
        divider = dIndexes[i];
        break;
      }
    }

    const left = convert(Math.trunc(num / divider));
    const right = num % divider === 0 ? "" : " " + convert(num % divider);

    return left + " " + dictionary[divider] + right;
  }
};
