import net, { Socket } from 'net';
import { parseCommand } from './parser';

const server = net.createServer((socket: Socket) => {
  console.log('Client connected');

  socket.on('data', (data: Buffer) => {
    const response = parseCommand(data.toString());
    socket.write(response);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Redis server running at port ${PORT}`);
});