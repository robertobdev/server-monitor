import socketIo from 'socket.io';

const io = socketIo(3000);

import ServerStatus from './server-status';
import MemoryStatus from './memory-status';

const serverStatus = new ServerStatus();
const memoryStatus = new MemoryStatus();

serverStatus.getCpfUsage().then((res) => {
  // console.log(res);
});
console.log(memoryStatus.getMemoryTotalAndFree());

io.on('connection', () => {
  console.log('websocket server connect!');
});

io.on('disconnect', () => {
  console.log('disconnect!');
  // clearInterval(timer);
});

io.serveClient();
