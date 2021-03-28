const reverseString = require("../code/reverseString");

test("ReverseString Test 1", () =>
  expect(reverseString("Hello")).toBe("olleH"));

test("ReverseString Test 2", () =>
  expect(reverseString("Hello, Sam")).toBe("maS ,olleH"));

test("ReverseString Test 3", () =>
  expect(reverseString("2s., querY")).toBe("Yreuq ,.s2"));
