export function validateNumber(arg0: number) {
  if (typeof arg0 !== "number") {
    throw new Error(`${arg0} is not a number`);
  }
}
