const caesar = require("../code/caesarCipher");

test("LowerCase Test", () => expect(caesar.encrypt("zabc")).toBe("abcd"));

test("UpperCase Test", () => expect(caesar.encrypt("ZABC")).toBe("ABCD"));
