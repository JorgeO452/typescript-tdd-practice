import { converterCelsiusToFahrenheit } from "../lib/convertCelsiusToFahrenheit";
import { converterFahrenheitToCelsius } from "../lib/converterFahrenheitToCelsius";

describe("Temperature converter Celsius to Fahrenheit", () => {
  it("Should convert 0 Celsius to Fahrenheit and get 32", () => {
    expect(converterCelsiusToFahrenheit(0)).toBe(32);
  });
  it("Should convert 100 Celsius to Fahrenheit and get 212", () => {
    expect(converterCelsiusToFahrenheit(100)).toBe(212);
  });
  it("Should convert 37 Celsius to Fahrenheit and get 98.6", () => {
    expect(converterCelsiusToFahrenheit(37)).toBe(98.6);
  });
  it("Should no convert caracter a fharenheit", () => {
    expect(() => converterCelsiusToFahrenheit("a" as any as number)).toThrow(
      `a is not a number`
    );
  });
  it("Should no convert undefined a fharenheit", () => {
    expect(() =>
      converterCelsiusToFahrenheit(undefined as any as number)
    ).toThrow(`undefined is not a number`);
  });
  it("Should no convert null a fharenheit", () => {
    expect(() => converterCelsiusToFahrenheit(null as any as number)).toThrow(
      `null is not a number`
    );
  });
});
describe("Temperature converter Fahrenheit to Celsius", () => {
  it("Should convert 32 Fahrenheit to Celsius and get 0", () => {
    expect(converterFahrenheitToCelsius(32)).toBe(0);
  });
  it("Should convert 212 Fahrenheit to Celsius and get 100", () => {
    expect(converterFahrenheitToCelsius(212)).toBe(100);
  });
  it("Should convert 98.6 Fahrenheit to Celsius and get 37", () => {
    expect(converterFahrenheitToCelsius(98.6)).toBe(37);
  });
  it("Should no convert caracter a Celsius", () => {
    expect(() => converterFahrenheitToCelsius("a" as any as number)).toThrow(
      `a is not a number`
    );
  });
  it("Should no convert undefined a Celsius", () => {
    expect(() =>
      converterFahrenheitToCelsius(undefined as any as number)
    ).toThrow(`undefined is not a number`);
  });
  it("Should no convert null a Celsius", () => {
    expect(() => converterFahrenheitToCelsius(null as any as number)).toThrow(
      `null is not a number`
    );
  });
});
