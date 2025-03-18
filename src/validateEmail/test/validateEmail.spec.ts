import { validateEmail } from "../lib/validateEmail";

describe("Validate Email", () => {
  it("should return email is valid if email is valid", () => {
    expect(validateEmail("test@test.com")).toBe("email is valid");
  });
  it("should return email is valid if email have a character uppercase", () => {
    expect(validateEmail("Test@test.com")).toBe("email is valid");
  });
  it("should return email is valid if email have a number", () => {
    expect(validateEmail("Test1@test.com")).toBe("email is valid");
  });
  it("should return email is valid if email have a number", () => {
    expect(validateEmail("Test1@test.com")).toBe("email is valid");
  });
  it("should return email is valid if email have a special character", () => {
    expect(validateEmail("Test-%+@test.com")).toBe("email is valid");
  });
  it("should return false if email have not '.com'", () => {
    expect(validateEmail("Test@test")).toBe('email is invalid, missing "."');
  });
  it("should return false if email have not '@algo'", () => {
    expect(validateEmail("Test.com")).toBe('email is invalid, missing "@"');
  });
});
