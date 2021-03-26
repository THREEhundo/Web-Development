const sum = require("./sum");

// COMMON MATCHERS

// -Exact Equality

// Returns an "expectation" object.
// Doesn't do much except call matchers on them.
// .toBe(3) is the matcher.
test("adds 1 + 2 to equal 3", () => expect(sum(1, 2)).toBe(3));

// toBe uses Object.is to test exact equality.
// If you want to check the VALUE of an object, use toEqual instead.
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
// toEqual recursively checks every field in an object or array.

// You can also test for the opposite of a matcher:
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
