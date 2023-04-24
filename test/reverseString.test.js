import reversedString from "../script/reverseString";

test("string is reversed", () => {
  expect(reversedString(" sumit")).toMatch("timus");
});
