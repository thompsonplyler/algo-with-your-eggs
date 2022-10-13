/* 
---
Leetcode 704. Binary Search
---
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. 
*/

const input1 = { nums: [-1, 0, 3, 5, 9, 12], target: 9, output: 4 };
const input2 = { nums: [-1, 0, 3, 5, 9, 12], target: 2, output: -1 };

const search = (input) => {
  const { nums, target } = input;

  let left = 0;
  let right = nums.length - 1;

  let check;
  while (left <= right) {
    check = Math.floor((left + right) / 2);
    if (nums[check] == target) {
      return check;
    } else if (nums[check] < target) {
      left = check + 1;
    } else {
      right = check - 1;
    }
  }

  return -1;
};

const input = input1;
const answer = search(input);
console.log(answer == input.output ? "✔️" : "❌");
