// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity
// and use only constant extra space.

// inline console logs in .js files: Quokka

const test1 = { input: [2, 2, 1], output: 1 };

const test2 = { input: [4, 1, 2, 1, 2], output: 4 };

const test3 = { input: [1], output: 1 };

const tests = [test1, test2, test3];

const popped = test2.input.pop();
let finder = test2.input.indexOf(popped);
console.log(finder);

const singleNumber = function (nums) {
  // ------------------

  /* sort if needed */ // nums = nums.sort((a, b) => a - b);
  let obj = {};

  while (nums.length > 0) {
    const popped = nums.pop();
    obj[popped] = true;

    const found = nums.indexOf(popped);

    if (found === -1 && !obj[popped]) {
      return popped;
    }
  }

  // Solution 1:
  //   for (let i = 0; i <= nums.length; i += 2) {
  //     if (nums[i] !== nums[i + 1]) return nums[i];
  //   }

  // Solution 2:
  // Create map
  //     const map = {}
  // populate map with all nums from nums arr
  //     for(let i = 0; i < nums.length; i++){
  //         map[nums[i]] ? map[nums[i]] ++ : map[nums[i]] = 1
  //     }

  // return the Object entries key where the total count was 1
  // return parseInt(Object.entries(map).filter(arr => arr[1] === 1).flat()[0])
};

tests.forEach((test) => {
  const { input, output } = test;
  const answer = singleNumber(input);
  const result = answer == output ? "Success" : "Fail";

  // Does it work?
  console.log(result);
});

/*

*/
