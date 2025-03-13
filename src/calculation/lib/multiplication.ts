import { validateArgs } from "./utils";

export function multiplication(...args: number[]): number {
  validateArgs(args);
  const result = args.reduce((acc, num) => acc * num, 1);
  return result;
}
