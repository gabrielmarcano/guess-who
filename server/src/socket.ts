import { useSocketServer } from 'socket-controllers'
import { Server } from 'socket.io'
import { MainController } from './api/controllers/mainController'
import { RoomController } from './api/controllers/roomController'

export default (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*'
    },
  })

  // io.on('connection', (socket) => {
  //   console.log('New socket connected: ', socket.id)
  // })

  // useSocketServer(io, { controllers: [__dirname + "/api/controllers/*.ts"] })

  useSocketServer(io, { controllers: [MainController, RoomController] })

  return io
}