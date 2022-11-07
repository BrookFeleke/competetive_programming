function isValid(s: string): boolean {
    const stack: string[] = [];
  
    const pairs = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
  
    for (let i = 0; i < s.length; i++) {
      if (!pairs[s.charAt(i)]) {
        stack.push(s.charAt(i));
      } else if (stack.pop() !== pairs[s.charAt(i)]) {
        return false;
      }
    }
  
    return stack.length === 0;
  }
