const reverse = function(x) {
    let result = 0;

    while (x) {
        let lastDigit = x % 10;
        x = (x - lastDigit) / 10;
        result = result * 10 + lastDigit;
    }

    if (result >= 2147483647 || result <= -2147483647) {
        return 0;
    }

    return result;
};

const result = reverse(-324550000);
console.log(result);