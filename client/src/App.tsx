import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

function App() {
  const connect = () => {
    const socket = io('http://localhost:9000')
  }

  useEffect(() => {
    connect()
  }, [])

  return (
    <div className="text-center">
      <h1 className='underline text-4xl'>Guess Who Game</h1>
    </div>
  )
}

export default App
