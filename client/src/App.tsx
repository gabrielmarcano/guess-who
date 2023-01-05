import { useEffect, useState } from 'react'
import { JoinRoom } from './components/joinRoom'
import GameContext, { IGameContextProps } from './gameContext'
import { io } from 'socket.io-client'
import type { Socket } from 'socket.io-client'

import socketService from './services/socketService'

function App() {
  const [socket, setSocket] = useState<Socket>()

  const [isInRoom, setIsInRoom] = useState(false)

  useEffect(() => {
    // const s = io(`${import.meta.env.VITE_SERVER_IP}:9000`)

    // setSocket(s)

    // return () => {
    //   s.disconnect()
    // }

    const s = socketService.connect(`${import.meta.env.VITE_SERVER_IP}:9000`).then(res => setSocket(res))
  }, [])

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setIsInRoom
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <div className="flex flex-col justify-center items-center">
        <h1 className='mt-5 underline text-4xl'>Guess Who Game</h1>
        {socket ? <JoinRoom></JoinRoom> : "Waiting for connection..."}
      </div>
    </GameContext.Provider>
  )
}

export default App
