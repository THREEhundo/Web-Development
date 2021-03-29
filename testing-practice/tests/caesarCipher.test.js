const caesar = require("../code/caesarCipher");

test("LowerCase Test", () => expect(caesar.encrypt("zabc")).toBe("abcd"));

test("UpperCase Test", () => expect(caesar.encrypt("ZABC")).toBe("ABCD"));

test("Number Test", () => expect(caesar.encrypt("0129")).toBe("1230"));

test("Non Letter Test", () =>
  expect(caesar.encrypt("Top Secret")).toBe("Upq Tfdsfu"));
