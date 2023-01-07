import type { Socket } from "socket.io-client"

class GameService {
  /**
   * Use a socket (user) to join a room with and ID.
   * @param socket Socket to connect to a room.
   * @param roomId ID of to room to connect to.
   * @returns 
   */
  public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      socket.emit("join_game", roomId)
      socket.on('room_joined', () => resolve(true))
      socket.on("room_join_error", ({ error }) => reject(error))
    })
  }
}

export default new GameService()