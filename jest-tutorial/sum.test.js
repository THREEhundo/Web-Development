const sum = require("./sum");

// COMMON MATCHERS

/* Exact Equality

Returns an "expectation" object.
Doesn't do much except call matchers on them.
.toBe(3) is the matcher. */
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

/* TRUTHINESS
  In testing sometimes you need to distinguish between "undefined", "null", and "false", but you sometimes don't want to treat them differently.

    - "toBeNull" matches "null" only
    - "toBeUndefined" matches "undefined" only
    - "toBeDefined" is the opposite of "toBeUndefined"
    - "toBeTruthy" matches anything that an "if" statement treats as true
    - "toBeFalsy" matches anything that an "if" statement treats as false */
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeUndefined();
  expect(n).toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).not.toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).not.toBeFalsy();
});

/* NUMBERS
  Most ways of comparing numbers have matcher equivalents. */
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// For floating point quality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3)      Won't work because of rounding error
  expect(value).toBeCloseTo(0.3);
});

/* STRINGS
  You can check strings against regular expressions with toMatch
 */
test("there is no I in team", () => expect("team").not.toMatch(/I/));

test("but there is a 'stop' in Christoph", () =>
  expect("Christoph".toMatch(/stop/)));

/* ARRAYS AND ITERABLES
  You can check if an array or iterable contains a particular item using toContain:
*/
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer",
];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});

/* EXCEPTIONS
  If you want to test whether a particular function throws an error when it's called, use toThrow
*/
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  // ** the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regxp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
