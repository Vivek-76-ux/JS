function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels("CodeHelp")); 
  console.log(countVowels("hello")); 
  console.log(countVowels("world")); 
  console.log(countVowels("aeiou")); 
  console.log(countVowels("JavaScript")); 
  console.log(countVowels("Pranay")); 