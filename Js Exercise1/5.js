const originalString = "CodeHelp";

function reverseString(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}

console.log(reverseString(originalString));