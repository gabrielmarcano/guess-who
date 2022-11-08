import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { JoinRoom } from './components/joinRoom'
import socketService from './services/socketService'

function App() {

  const connectSocket = async () => {
    const socket = socketService.connect("http://localhost:9000").catch((err) => {
      console.error("Error: ", err)
    })
  }

  useEffect(() => {
    connectSocket()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='underline text-4xl'>Guess Who Game</h1>
      <div>
        <JoinRoom></JoinRoom>
      </div>
    </div>
  )
}

export default App
