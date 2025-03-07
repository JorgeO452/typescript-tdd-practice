import { sum } from "../lib/sum";

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
    expect(() => sum(2, null as any as number)).toThrow(
      `null is not defined`
    );
  });
});
