public class container_with_most_water {
    
}
class Solution {
    public int maxArea(int[] nums) {
        int n=nums.length,L=0,R=n-1;
        int area=0;
        while(R>L){
            if(nums[L]>nums[R]){
                int temp = nums[R] * (R-L);
                if(temp>area) area = temp;
                
                R--;
            }else if(nums[R]>=nums[L]){
                int temp = nums[L] * (R-L);
                if(temp>area) area = temp;
                L++;
            }
        }
    return area;
    }
}



// [1,8,6,2,5,4,3,7]
// 
