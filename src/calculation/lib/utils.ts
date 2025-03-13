export function validateArgs(args: number[]): void {
  for (let arg of args) {
    if (typeof arg !== "number" || arg === undefined || arg === null) {
      throw new Error(`${arg} is not defined`);
    }
  }
}
