export function sum(...args: number[]): number {
  for (let arg of args) {
    if (typeof arg !== "number" || arg === undefined || arg === null) {
      throw new Error(`${arg} is not defined`);
    }
  }
  const result = args.reduce((acc, num) => acc + num, 0);
  return result;
}
