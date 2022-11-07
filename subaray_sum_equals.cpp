class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int ans = 0, sum = 0;
        
        //count the occurrence of cumulative sum
        map<int, int> counter;
        
        counter[0] = 1;
        
        for(int i = 0; i < nums.size(); i++){
            sum += nums[i];
            //"sum"(current cumulative sum) - last cumulative sum(counter[?]) = k
            //we can substract last cumulative sum from current cumulative sum to get k, and there are counter[sum - k] possibilities
            if(counter.find(sum - k) != counter.end()){
                ans += counter[sum - k];
            }
            //occurrence of prefix sum
            counter[sum]++;
        }
        
        return ans;
    }
};
