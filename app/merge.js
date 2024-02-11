function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0]; // Example array with extra space for merging
let m = 3; // Number of elements in nums1
let nums2 = [2, 5, 6]; // Second array
let n = 3; // Number of elements in nums2

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
