// Given an array nums containing n distinct numbers
// in the range [0, n], return the only number
// in the range that is missing from the array.

const test1 = { input: [3, 0, 1], output: 2 };
const test2 = { input: [0, 1], output: 2 };
const test3 = { input: [9, 6, 4, 2, 3, 5, 7, 0, 1], output: 8 };

const missingNumber = (nums) => {
  const { input } = nums;
  const sorted = input.sort((a, b) => a - b);

  /* 
    
    Come back for pre-sort variant: 
    as we sort, we determine whether sorted value's 
    neighbor values exist. 

    */

  const obj = {};
  let missing = sorted.length;
  if (sorted.length == 1 && sorted[0]==0) {return 1 }
  if (sorted[0] != 0) {return 0}
    

  sorted.forEach((n, idx) => {
    obj[idx] = n;
    if (idx != 0 && obj[idx - 1] !== n - 1) {
      missing = n - 1;
    }
  });

  return missing;
};

const test = test2;
const answer = missingNumber(test);

console.log(answer == test.output ? "Success" : "Fail");

/*

Optimal solution from The Internet using Gauss's Solution:

 
const missingNumber = function(nums) {

    
    let expectedSum = nums.length*(nums.length+1)/2;
    let actualSum = 0;
    for (let number of nums){
        actualSum += number
    }
    return expectedSum-actualSum
};

*/
