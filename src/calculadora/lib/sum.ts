import { validateArgs } from "./utils";

export function sum(...args: number[]): number {
  validateArgs(args);
  const result = args.reduce((acc, num) => acc + num, 0);
  return result;
}
