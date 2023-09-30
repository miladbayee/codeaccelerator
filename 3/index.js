const word = "xdSZtZQxkFUjSlnnpZaQFpbGFf";

let uppercaseNumber = 0;
let lowercaseNumber = 0;

// Solution 1
for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) uppercaseNumber += 1;
    if (word[i] === word[i].toLowerCase()) lowercaseNumber += 1;
}

// Solution 2
const upperReq = /[A-Z]/g;
const lowerReq = /[a-z]/g;

uppercaseNumber = word.match(upperReq).length;
lowercaseNumber = word.match(lowerReq).length;

console.log(
  `
    Uppercase letter:${uppercaseNumber}
    Lowercase letter:${lowercaseNumber}
    `
);
