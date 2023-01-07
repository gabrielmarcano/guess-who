import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { Socket } from 'socket.io-client'

import Home from './components/Home'
import GameContext, { IGameContextProps } from './gameContext'
import socketService from './services/SocketService'

function App() {
  const [socket, setSocket] = useState<Socket>()

  const [isInRoom, setIsInRoom] = useState(false)

  useEffect(() => {
    socketService.connect(`${import.meta.env.VITE_SERVER_IP}:9000`)

    if (socketService.socket) setSocket(socketService.socket)

    return () => {
      socketService.disconnect()
    }
  }, [])

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setIsInRoom
  }

  return (
    <BrowserRouter>
      <div>
        <GameContext.Provider value={gameContextValue}>
          <Routes>
            <Route path="/" element={<Home isLoading={!socket} />}></Route>
            {/* <Route path="/chat" element={<ChatPage socket={socket} />}></Route> */}
          </Routes>
        </GameContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
