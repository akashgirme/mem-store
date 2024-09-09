import { hashStore } from '../../models/hashStore';

export function hgetCommand(key: string, field: string): string {
  const value = hashStore.hget(key, field);
  if (value === null) {
    return '$-1\r\n'; // Field does not exist
  }
  return `$${value.length}\r\n${value}\r\n`;
}