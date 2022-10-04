class Solution {
    public int lengthOfLongestSubstring(String s) {
        char[] arr = s.toCharArray();
        
        int n = arr.length;
        if(n < 2) return n;
        
        int L = 0, R = 0;
        
        Map<Character, Integer> hm = new HashMap<>();
    
        int maxLen = 0;
        
        while(R<n){
            hm.put(arr[R],hm.getOrDefault(arr[R],0)+1);
                
            while(hm.size() != R - L + 1){
                hm.put(arr[L],hm.get(arr[L]) - 1);
                if(hm.get(arr[L])==0){
                    hm.remove(arr[L]);
                }
                L++;
            }
            maxLen = Math.max(maxLen,R - L + 1);
            R++;
        }
        return maxLen;
        
        
    }
}
