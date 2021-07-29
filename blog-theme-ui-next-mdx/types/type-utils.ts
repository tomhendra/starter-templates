export function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== 'undefined';
}

export type WithChildren<T = { [key: string]: unknown }> = T & {
  children?: React.ReactNode;
};

export class UnreachableError extends Error {
  constructor(val: never, message: string) {
    super(`TypeScript thought we could never end up here\n${message}`);
  }
}
