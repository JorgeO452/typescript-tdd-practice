import { validateNumber } from "./utils";

export function converterCelsiusToFahrenheit(arg0: number): number {
  validateNumber(arg0);
  const fahrenheit = (arg0 * 9) / 5 + 32;
  return fahrenheit;
}
