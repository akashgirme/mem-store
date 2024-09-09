import { store } from '../../models/store';

export function getCommand(args: string[]): string {
  const key = args[1];
  const value = store.get(key);

  if (value === null) {
    return '$-1\r\n'; // Key does not exist
  }

  return `$${value.length}\r\n${value}\r\n`;
}