function chalkReplacer(chalk: number[], k: number): number {
    let result = 0;
    k %= chalk.reduce((a, b) => a + b, 0);
    if (k == 0) return 0;
  
    for (let i = 0; i < chalk.length; ++i) {
      k -= chalk[i];
      if (k < 0) {
        result = i;
        break;
      }
    }
  
    return result;
  }
