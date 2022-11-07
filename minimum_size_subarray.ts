function minSubArrayLen(target: number, nums: number[]): number {
    // target = 7, nums = [2,3,1,2,4,3]  2
    let ans = Infinity;
    let sum = 0;
  
    for (let l = 0, r = 0; r < nums.length; ++r) {
      sum += nums[r];
      while (sum >= target) {
        ans = Math.min(ans, r - l + 1);
        sum -= nums[l++];
      }
    }
  
    return ans != Infinity ? ans : 0;
  }
