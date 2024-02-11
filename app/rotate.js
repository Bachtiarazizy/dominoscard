function rotate(nums, k) {
  k %= nums.length; // Ensure k is within the length of the array
  reverse(nums, 0, nums.length - 1); // Reverse the whole array
  reverse(nums, 0, k - 1); // Reverse the first part up to k
  reverse(nums, k, nums.length - 1); // Reverse the remaining part after k
}

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// Example usage:
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
rotate(nums1, k1);
console.log(nums1); // Output: [5,6,7,1,2,3,4]

let nums2 = [-1, -100, 3, 99];
let k2 = 2;
rotate(nums2, k2);
console.log(nums2); // Output: [3,99,-1,-100]




// function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0
