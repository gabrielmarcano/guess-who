import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import JoinRoom from './JoinRoom'
import SocketService from '../services/SocketService';

interface IHome { }

export default function Home(props: IHome) {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    localStorage.setItem('userName', userName)

    navigate('/chat')
  }

  return (
    <>
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">Sign in to Open Chat</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          minLength={6}
          name="username"
          id="username"
          className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="home__cta">SIGN IN</button>
      </form>

      <div className="flex flex-col justify-center items-center">
        <h1 className='mt-5 underline text-4xl'>Guess Who Game</h1>
        {SocketService.socket ? <JoinRoom></JoinRoom> : "Waiting for connection..."}
      </div>
    </>
  )
}

    // <GameContext.Provider value={gameContextValue}>
    //   <div className="flex flex-col justify-center items-center">
    //     <h1 className='mt-5 underline text-4xl'>Guess Who Game</h1>
    //     {socket ? <JoinRoom></JoinRoom> : "Waiting for connection..."}
    //   </div>
    // </GameContext.Provider>
