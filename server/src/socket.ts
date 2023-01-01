import { Server } from 'socket.io'
import type http from 'http'

export default (httpServer: http.Server) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*'
    },
  })

  io.on('connection', (socket) => {
    console.log('New socket connected: ', socket.id)
  })

  return io
}