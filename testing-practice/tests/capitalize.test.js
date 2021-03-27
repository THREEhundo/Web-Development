const capitalize = require("../code/capitalize");

test("Capitalize Test 1", () => expect(capitalize("samuel")).toBe("Samuel"));

test("Capitalize Test 2", () =>
  expect(capitalize("where'sthemoney?")).toBe("Where'sthemoney?"));

test("Capitalize Test 3", () =>
  expect(capitalize("hoW much waTer have YOU drank tODay?")).toBe(
    "HoW much waTer have YOU drank tODay?"
  ));
