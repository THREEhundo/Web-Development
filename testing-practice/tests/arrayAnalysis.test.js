const arrayAnalysis = require("../code/arrayAnalysis");

test("Set 1", () => {
  expect(arrayAnalysis([10, 20, 30])).toEqual({
    average: 20,
    min: 10,
    max: 30,
    length: 3,
  });
});

test("Set 2", () => {
  expect(arrayAnalysis([11, 22, 33, 44])).toEqual({
    average: 27.5,
    min: 11,
    max: 44,
    length: 4,
  });
});

test("Set 3", () => {
  expect(arrayAnalysis([22, 22, 33, 0])).toEqual({
    average: 19.25,
    min: 0,
    max: 33,
    length: 4,
  });
});
