import { setCommand } from './commands/string/set';
import { getCommand } from './commands/string/get';
import { expireCommand } from './commands/string/expire';
import { hsetCommand } from './commands/hash/hset';
import { hgetCommand } from './commands/hash/hget';

export function parseCommand(command: string): string {
  const parts = command.trim().split(' ');
  const cmd = parts[0].toLowerCase();

  switch (cmd) {
    case 'set':
      return setCommand(parts[1], parts[2], parts[3] ? parseInt(parts[3]) : undefined);
    case 'get':
      return getCommand(parts[1]);
    case 'expire':
      return expireCommand(parts[1], parseInt(parts[2]));
    case 'hset':
      return hsetCommand(parts[1], parts[2], parts[3]);
    case 'hget':
      return hgetCommand(parts[1], parts[2]);
    default:
      return '-ERR unknown command\r\n';
  }
}