// Given an integer array nums, return true if any value
// appears at least twice in the array, and return false
// if every element is distinct.

const input1 = { nums: [1, 2, 3, 1], output: true };
const input2 = { nums: [1, 2, 3, 4], output: false };
const input3 = { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 1], output: true };

var containsDuplicate = function (nums) {
  let obj = {};
  console.log(nums);
  for (let number of nums) {
    if (obj[number]) {
      return true;
    } else {
      obj[number] = true;
    }
  }

  return false;
};

const { nums, output } = input1;
const answer = containsDuplicate(nums, output);
answer
  ? console.log("Contains duplicate!")
  : console.log("Does not contain duplicate!");
