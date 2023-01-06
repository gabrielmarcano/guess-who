import { io, Socket } from 'socket.io-client'

class SocketService {
  public socket: Socket | null = null

  /**
   * Starts the connection to a socket server.
   * @param url The URL of the socket server.
   * @returns A promise that resolves in the socket.
   */
  public connect(url: string): Promise<Socket> {
    return new Promise((resolve, reject) => {
      this.socket = io(url)

      if (!this.socket) {
        return reject('There isn\'t any socket available.')
      }
  
      this.socket.on('connect', () => {
        resolve(this.socket as Socket)
      })

      this.socket.on("connect_error", (err) => {
        console.log("Connection error: ", err)
        reject(err)
      })
    })
  }

  /**
   * Disconnects the socket from the socket server.
   * @returns self
   */
  public disconnect(): Promise<Socket> {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('There isn\'t any socket available.')

      resolve(this.socket.disconnect())
    })
    
  }
}

export default new SocketService()