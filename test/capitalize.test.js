import capitalize from "../script/capitalize";

test("first letter is capital", () => {
  expect(capitalize("sumit")).toMatch("Sumit");
});

test("first word of sentence have first letter capital", () => {
  expect(capitalize(" this is sumit ")).toMatch("This is sumit");
});
