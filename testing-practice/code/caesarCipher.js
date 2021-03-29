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

const encrypt = (msg) => {
  let code = "";
  for (var i = 0; i < msg.length; i++) {
    if (msg[i] === msg[i].toLowerCase()) {
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

const caesar = {
  encrypt,
};

module.exports = caesar;
