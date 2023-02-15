// Test case 1

let nums = [1, 2, 3, 4, 5, 6, 7, 90, 12];

let max = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
    console.log(max);
}

// This is where Test case 1 ends