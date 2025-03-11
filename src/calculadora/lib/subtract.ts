import { validateArgs } from "./utils";

export function subtract(...args: number[]): number {
  validateArgs(args);
  const result = args.reduce((acc, num) => acc - num);
  return result;
}
