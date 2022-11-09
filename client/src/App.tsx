import { useEffect, useState } from 'react'
import { JoinRoom } from './components/joinRoom'
import GameContext, { IGameContextProps } from './gameContext'
import socketService from './services/socketService'

function App() {
  const [isInRoom, setIsInRoom] = useState(false)

  const connectSocket = async () => {
    const socket = socketService.connect("http://192.168.0.129:9000").catch((err) => {
      console.error("Error: ", err)
    })
  }

  useEffect(() => {
    connectSocket()
  }, [])

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setIsInRoom
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <div className="flex flex-col justify-center items-center">
        <h1 className='mt-5 underline text-4xl'>Guess Who Game</h1>
        <JoinRoom></JoinRoom>
      </div>
    </GameContext.Provider>
  )
}

export default App
