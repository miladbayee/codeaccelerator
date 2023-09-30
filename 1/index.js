const word = "78@hg#$*89DaT";
const wordLenght = word.length;

let alphabetLenght = 0;
let numberLenght = 0;

// Solution 1
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// for (let i = 0; i < word.length; i++) {
for (let j = 0; j < alphabets.length; j++) {
  if (word[i]?.toUpperCase() === alphabets[j]) {
    alphabetLenght += 1;
  }
}

for (let i = 0; i < word.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (word[i] === numbers[j]) {
      numberLenght += 1;
    }
  }
}

const total = alphabetLenght + numberLenght;
if (wordLenght === total) {
  console.log(`
    Charecter : ${alphabetLenght}
    Number : ${numberLenght}
    `);
} else {
  const specialCharacter = wordLenght - total;
  console.log(`
    Charecter : ${alphabetLenght}
    Number : ${numberLenght}
    Spical Character : ${specialCharacter}
    `);
}

// Solution 2

for (let i = 0; i < word.length; i++) {
  if (alphabets.includes(word[i].toUpperCase())) alphabetLenght += 1;
  if (numbers.includes(word[i])) numberLenght += 1;
}

const total = alphabetLenght + numberLenght;
if (wordLenght === total) {
  console.log(`
    Charecter : ${alphabetLenght}
    Number : ${numberLenght}
    `);
} else {
  const specialCharacter = wordLenght - total;
  console.log(`
    Charecter : ${alphabetLenght}
    Number : ${numberLenght}
    Spical Character : ${specialCharacter}
    `);
}

// Solution 3

const letterReq = /[a-z]/gi;
const numberReq = /[0-9]/gi;

alphabetLenght = word.match(letterReq).length;
numberLenght = word.match(numberReq).length;

const total = alphabetLenght + numberLenght;
if (wordLenght === total) {
  console.log(`
    Charecter : ${alphabetLenght}
    Number : ${numberLenght}
    `);
} else {
  const specialCharacter = wordLenght - total;
  console.log(`
    Charecter : ${alphabetLenght}
    Number : ${numberLenght}
    Spical Character : ${specialCharacter}
    `);
}
