import { validateNumber } from "./utils";

export function converterFahrenheitToCelsius(arg0: number): number {
  validateNumber(arg0);
  const celsius = ((arg0 - 32) * 5) / 9;
  return celsius;
}
