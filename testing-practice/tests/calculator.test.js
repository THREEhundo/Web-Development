const calculator = require("../code/calculator");

test("Calculator Addition Test", () => expect(calculator.add(1, 2)).toBe(3));

test("Calculator Subtraction Test", () =>
  expect(calculator.subtract(20, 2)).toBe(18));

test("Calculator Division Test", () =>
  expect(calculator.divide(3, 150)).toBe(50));

test("Calculator Multiplication Test", () =>
  expect(calculator.multiply(5, 5)).toBe(25));
