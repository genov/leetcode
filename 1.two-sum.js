function twoSum(nums, target) {
    let map = {};
    let index = 0;

    while(index < nums.length) {

        if (map[nums[index]] >= 0) {
            return [map[nums[index]], index];
        }

        map[target - nums[index]] = index;

        index++;
    }

    return null;
}

// Test cases

const vector1 = [2, 7, 11, 15];
const target1 = 9;
// Should return [0, 1];

const vector2 = [0, 1, 99, 5, 2, 1003];
const target2 = 1008;
// Should return [3, 5];

const vector3 = [0];
const target3 = 8;
// Should return null;

const vector4 = [];
const target4 = 7;
// Should return null;

const vector5 = [0, 4, 7, 0];
const target5 = 0;
// Should return [0, 3]];

const result = twoSum(vector5, target5);

console.log(result);
