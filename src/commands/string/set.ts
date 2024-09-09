import { store } from '../../models/store';

export function setCommand(args: string[]): string {
  let key = '';
  let value = '';
  let expiry: number | undefined = undefined;

  for (let i = 1; i < args.length; i += 2) {
    switch (args[i].toLowerCase()) {
      case 'nx':
      case 'xx':
        // TODO: Implement NX and XX options
        break;
      case 'ex':
        expiry = parseInt(args[i + 1]) * 1000; // Seconds to milliseconds
        break;
      case 'px':
        expiry = parseInt(args[i + 1]); // Milliseconds
        break;
      case 'keepttl':
        // TODO: Implement KEEPTTL option
        break;
      default:
        if (key === '') {
          key = args[i];
        } else {
          value = args[i];
        }
    }
  }

  store.set(key, value, expiry);
  return '+OK\r\n';
}