const {
  stringLength,
  reverseString,
  capitalize,
  Calculator,
} = require("./function");

// Test for string length.

describe("Test:(stringLength()", () => {
  test("pass: stringLength() should return correct length", () => {
    expect(stringLength("Morning")).toBe(7);
  });

  test("pass: stringLength() should return an error string", () => {
    expect(stringLength("What do you do every morning?")).toBe(
      "Error!,String is less than or greater than 10"
    );
  });

  test("pass: stringLength() should return an error string", () => {
    expect(stringLength("")).toBe(
      "Error!,String is less than or greater than 10"
    );
  });
});

// Test for reverse string
describe("TEST: reverseString()", () => {
  test("error: reverseString() does not reverse string", () => {
    expect(reverseString("Memo")).toBe("omeM");
  });
});

//Test for  Calculator
describe("TEST: class Calculator", () => {
  test("error: Calculator not adding properly", () => {
    let calculator = new Calculator();
    expect(calculator.add(5, 7)).toBe(12);
  });

  test("error: Calculator not substracting properly", () => {
    let calculator = new Calculator();
    expect(calculator.subtract(10, 8)).toBe(2);
  });

  test("error: Calculator not multiplying properly", () => {
    let calculator = new Calculator();
    expect(calculator.multiply(4, 7)).toBe(28);
  });
});

// Test  for capitalize
describe("TEST: capitalize()", () => {
  test("error: The string is not capitalize", () => {
    expect(capitalize("john")).toBe("JOHN");
  });
});
