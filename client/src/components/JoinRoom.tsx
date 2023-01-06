import React, { useContext, useState } from "react"
import gameContext from "../gameContext"
import GameService from "../services/GameService"
import SocketService from "../services/SocketService"

interface IJoinRoomProps { }

export default function JoinRoom(props: IJoinRoomProps) {

  const [inputValue, setInputValue] = useState('')
  const [roomName, setRoomName] = useState('')
  const [isJoining, setIsJoining] = useState(false)

  const { isInRoom, setIsInRoom } = useContext(gameContext)

  const handleInputValueChange = (e: React.ChangeEvent<any>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const joinRoom = async (e: React.FormEvent) => {
    e.preventDefault()

    const socket = SocketService.socket

    if (!inputValue || inputValue.trim() === '' || !socket) return

    setIsJoining(true)

    const joined = await GameService.joinGameRoom(socket!, inputValue).catch((err) => {
      alert(err)
    })

    if (joined) setIsInRoom(true)

    setIsJoining(false)

    setRoomName(inputValue)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-5">Welcome to Guess Who, select a room</h1>

      <form className="flex" onSubmit={joinRoom}>
        <div className="relative mr-3">
          <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input type="text" aria-label="Room" placeholder="Room ID" value={inputValue} onChange={handleInputValueChange} className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" />
        </div>

        <button type="submit" disabled={isJoining} className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
          <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          {isJoining ? 'Joining...' : 'Join'}
        </button>
      </form>

      <div>
        {`Room name: ${isInRoom ? `${roomName}` : ''}`}
      </div>

    </div>
  )
}