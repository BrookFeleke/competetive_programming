class Solution {
public:
    string reverseParentheses(string s) {
        int N = s.size();
        string ans = "";
        stack<int> openIdxs;
        map<int, int> pair;
        
        for(int i = 0; i < N; i++){
            if(s[i] == '('){
                openIdxs.push(i);
            }else if(s[i] == ')'){
                int j = openIdxs.top(); openIdxs.pop();
                pair[i] = j;
                pair[j] = i;
            }
        }
        
        for(int i = 0, d = 1; i < N; i += d){
            if(s[i] == '(' || s[i] == ')'){
                i = pair[i];
                d = -d;
                // cout << i << " " << pair[i] << " " << d << endl;
            }else{
                ans += s[i];
            }
            // cout << i << " " << ans << endl;
        }
        
        return ans;
    }
};
