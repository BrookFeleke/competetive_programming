function nextPermutation(nums: number[]): void {
    let index = -1;
  
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        index = i;
        break;
      }
    }
  
    for (let i = nums.length - 1; i > index && index != -1; i--) {
      if (nums[i] > nums[index]) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
        break;
      }
    }
  
    nums.push(...nums.splice(index + 1, nums.length - 1).reverse());
  }
