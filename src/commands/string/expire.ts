import { store } from '../models/store';

export function expireCommand(key: string, seconds: number): string {
  const entry = store.get(key);
  if (entry !== null) {
    store.set(key, entry, seconds);
    return '(integer) 1\r\n'; // Successfully set expiry
  }
  return '(integer) 0\r\n'; // Key does not exist
}