function majorityElement(nums) {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }
    }
  }

  // At this point, candidate is a potential majority element
  // We need to verify if it occurs more than n/2 times
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  }

  // The majority element always exists, so this line will never be reached
}

// Test cases
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
