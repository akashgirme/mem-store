import { hashStore } from '../../models/hashStore';

export function hsetCommand(key: string, field: string, value: string): string {
  hashStore.hset(key, field, value);
  return 'OK\r\n';
}