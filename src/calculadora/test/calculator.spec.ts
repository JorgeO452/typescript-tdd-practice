import { sum } from "../lib/sum";
import { subtract } from "../lib/subtract";
import { multiplication } from "../lib/multiplication";

describe("Sum calculation", () => {
  it("Should add 2 + 2 and get 6", () => {
    expect(sum(2, 2)).toBe(4);
  });
  it("Should add 2 + 2 + 2 and get 8", () => {
    expect(sum(2, 2, 2)).toBe(6);
  });
  it("Should add 2 and get 2", () => {
    expect(sum(2)).toBe(2);
  });
  it("Should add 0 and get 0", () => {
    expect(sum(0)).toBe(0);
  });
  it("Should throw an error when trying to add a letra", () => {
    expect(() => sum(2, "h" as any as number)).toThrow(`h is not defined`);
  });
  it("Should throw an error when trying to add an undefined", () => {
    expect(() => sum(2, undefined as any as number)).toThrow(
      `undefined is not defined`
    );
  });
  it("Should throw an error when trying to add a null", () => {
    expect(() => sum(2, null as any as number)).toThrow(`null is not defined`);
  });
});
describe("Subtract calculation", () => {
  it("Should subtract 2 - 2 and get 0", () => {
    expect(subtract(2, 2)).toBe(0);
  });
  it("Should subtract 6 - 2 - 2 and get 2", () => {
    expect(subtract(6, 2, 2)).toBe(2);
  });
  it("Should subtract 2 and get 2", () => {
    expect(subtract(2, 6)).toBe(-4);
  });
  it("Should subtract 0 and get 0", () => {
    expect(subtract(0)).toBe(0);
  });
  it("Should throw an error when trying to subtract a letra", () => {
    expect(() => subtract(2, "h" as any as number)).toThrow(`h is not defined`);
  });
  it("Should throw an error when trying to subtract an undefined", () => {
    expect(() => subtract(2, undefined as any as number)).toThrow(
      `undefined is not defined`
    );
  });
  it("Should throw an error when trying to subtract a null", () => {
    expect(() => subtract(2, null as any as number)).toThrow(
      `null is not defined`
    );
  });
});
describe("multiplication calculation", () => {
  it("Should multiplication 2 * 2 and get 4", () => {
    expect(multiplication(2, 2)).toBe(4);
  });
  it("Should multiplication 6 * 2 * 2 and get 2", () => {
    expect(multiplication(6, 2, 2)).toBe(24);
  });
  it("Should multiplication 2 * 0 and get 0", () => {
    expect(multiplication(2, 0)).toBe(0);
  });
  it("Should multiplication 0 and get 0", () => {
    expect(multiplication(0)).toBe(0);
  });
  it("Should throw an error when trying to multiplication a letra", () => {
    expect(() => multiplication(2, "h" as any as number)).toThrow(`h is not defined`);
  });
  it("Should throw an error when trying to multiplication an undefined", () => {
    expect(() => multiplication(2, undefined as any as number)).toThrow(
      `undefined is not defined`
    );
  });
  it("Should throw an error when trying to multiplication a null", () => {
    expect(() => multiplication(2, null as any as number)).toThrow(
      `null is not defined`
    );
  });
});
