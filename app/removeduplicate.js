// remove element

var removeElement = function (nums, val) {
  let k = 0; // Variable to store the count of elements not equal to val

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If current element is not equal to val
    if (nums[i] !== val) {
      // Move the current element to the position of k
      nums[k] = nums[i];
      // Increment k to indicate one more element is not equal to val
      k++;
    }
  }

  return k; // Return the count of elements not equal to val
};

function removeDuplicates(nums) {
  if (!nums.length) return 0;

  // Initialize the pointer for unique elements
  let uniquePtr = 1;

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the previous one
    if (nums[i] !== nums[i - 1]) {
      // Place the unique element at the position of the unique pointer
      nums[uniquePtr] = nums[i];
      // Move the unique pointer forward
      uniquePtr++;
    }
  }

  // Return the number of unique elements (length until the unique pointer)
  return uniquePtr;
}

// Test cases
let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // Output: 2
console.log(nums1); // Output: [1, 2, _]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2)); // Output: 5
console.log(nums2);

//

function removeDuplicates(nums) {
  if (nums.length <= 2) return nums.length; // If array has 2 or fewer elements, no need to remove duplicates

  let count = 1; // Count of current element
  let index = 1; // Index to place the next unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++; // Increment count for duplicate element
    } else {
      count = 1; // Reset count for new element
    }

    if (count <= 2) {
      nums[index] = nums[i]; // Place the element at the next available index
      index++; // Move to the next index
    }
  }

  return index; // Return the length of the modified array
}

// Test cases
let nums1 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums1)); // Output: 5, nums1 = [1, 1, 2, 2, 3, _]

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums2)); // Output: 7, nums2 = [0, 0, 1, 1, 2, 3, 3, _, _]
