const word = "xdS1ZtZQ4xkFUjS9lnnp0Za5QFpbGF";
let reverseWord = "";

// Solution 1
for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
}

// Solution 2
reverseWord = word.split("").reverse().join("");

console.log(reverseWord);
