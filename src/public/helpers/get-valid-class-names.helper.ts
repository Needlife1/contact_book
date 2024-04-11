import { type ClassValue, clsx } from 'clsx';

export const getValidClassNames: typeof clsx = (
  ...inputs: ClassValue[]
): string => {
  return clsx(...inputs);
};
