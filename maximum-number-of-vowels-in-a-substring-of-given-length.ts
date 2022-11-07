function maxVowels(s: string, k: number): number {
  const isVowel = (ch: string) => {
    return ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"
      ? true
      : false;
  };

  let countVowels = 0;
  let maxVowels = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(s.charAt(i))) countVowels++;
  }

  if (maxVowels < countVowels) maxVowels = countVowels;

  for (let i = k; i < s.length; i++) {
    if (isVowel(s.charAt(i))) countVowels++;

    if (isVowel(s.charAt(i - k))) countVowels--;

    maxVowels = Math.max(maxVowels, countVowels); // update maxVowels for each window.
  }

  return maxVowels;
}
