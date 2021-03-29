const lowerAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperAlphabet = [
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

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const encrypt = (msg) => {
  const nonLetters = /[^A-Za-z0-9]/;
  const num = /[0-9]/;
  let code = "";

  for (var i = 0; i < msg.length; i++) {
    if (nonLetters.test(msg[i])) {
      code += msg[i];
    } else if (num.test(msg[i])) {
      for (var l = 0; l < numbers.length; l++) {
        if (msg[i] === numbers[l]) {
          l + 1 > 9 ? (code += numbers[l + 1 - 10]) : (code += numbers[l + 1]);
        }
      }
    } else if (msg[i] === msg[i].toLowerCase()) {
      for (var j = 0; j < lowerAlphabet.length; j++) {
        if (msg[i] === lowerAlphabet[j]) {
          j + 1 > 25
            ? (code += lowerAlphabet[j + 1 - 26])
            : (code += lowerAlphabet[j + 1]);
        }
      }
    } else if (msg[i] === msg[i].toUpperCase()) {
      for (var k = 0; k < upperAlphabet.length; k++) {
        if (msg[i] === upperAlphabet[k]) {
          k + 1 > 25
            ? (code += upperAlphabet[k + 1 - 26])
            : (code += upperAlphabet[k + 1]);
        }
      }
    }
  }

  return code;
};

const decrypt = (msg) => {
  let decrypted = "";
};

const caesar = {
  encrypt,
};

module.exports = caesar;
