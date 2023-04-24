import calculator from "../script/calculator";
import Calculator from "../script/calculator";

test("add 8 + 8 to equal 16", () => {
  expect(new Calculator().add(8, 8)).toBe(16);
});

test("add 9,5,3,2,45 to equal 64", () => {
  expect(new Calculator().add(9, 5, 3, 2, 45)).toBe(64);
});

test("multiply 8 * 8 to equal 64", () => {
  expect(new calculator().mul(8, 8)).toBe(64);
});

test("substract 8 - 8 to equal 64", () => {
  expect(new calculator().substract(8, 8)).toBe(0);
});

test("devide 8 / 8 to equal 1", () => {
  expect(new calculator().devide(8, 8)).toBe(1);
});
