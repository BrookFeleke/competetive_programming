function minPairSum(nums: number[]): number {
    nums.sort((i, j) => i - j);
  
    let max = 0;
  
    for (let i = 0; i < nums.length / 2; i++) {
      max = Math.max(max, nums[i] + nums[nums.length - 1 - i]);
    }
  
    return max;
  }
