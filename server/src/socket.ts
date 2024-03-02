import { Server } from 'socket.io';
import type http from 'http';

export default (httpServer: http.Server) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('Socket connected: ', socket.id);

    socket.on('disconnect', () => {
      console.log('Socket disconnected: ', socket.id);
    });

    socket.on('join_game', (roomId, callback) => {
      socket.join(roomId);
      console.log(`Socket ${socket.id} joined to ${roomId}`);
      socket.emit('room_joined');
    });
  });

  return io;
};
