output1 = { nums: [2, 7, 11, 15], target: 17 };
output2 = { nums: [3, 2, 4], target: 6 };
output3 = { nums: [3, 3], target: 6 };

//Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];

    console.log(`iteration ${i + 1}:`, cur);

    let x = target - cur;

    console.log(`iteration ${i + 1}:`, x);

    if (map[x] != undefined) {
      return [map[x], i];
    }

    map[cur] = i;
  }
};

const { nums, target } = output3;

let answer = twoSum(nums, target);
console.log(answer);
