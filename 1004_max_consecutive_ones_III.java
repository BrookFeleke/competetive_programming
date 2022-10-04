class Solution {
    public int longestOnes(int[] nums, int k) {
        int n = nums.length;
        if(n<2 && 0 <k) return n;
        
        int L = 0, R=0;
        
        int maxLen = 0;
        int counter = 0;
        while(R<n){
            if(nums[R]==0){
             counter++;
            }
            
            
            while(k<counter){
                if(nums[L]==0){
                    counter--;
                }
                L++;
            }
            
            maxLen = Math.max(maxLen,R - L+1);
         R++;   
        }
        return maxLen;
    }
}
