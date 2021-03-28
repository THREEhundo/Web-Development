const reverseString = (str) => {
  if (!str.length) return;

  return [...str].reverse().join("");
};

module.exports = reverseString;
