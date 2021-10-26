import React, { useState, useEffect } from 'react'
import './App.css'
import RegisterForm from './RegisterForm'
import Chat from './Chat'
import socketIOClient  from 'socket.io-client'

const App = props => {

  const host = 'http://localhost:3001/'

  const [isRegistered, setIsRegistered] = useState(false)
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])

  const register = e => {
    e.persist()
    e.preventDefault()
    fetch(`${host}messages`)
      .then(response => response.json())
      .then(messages => {
        setIsRegistered(true)
        setUsername(e.target.user.value)
        setMessages(messages.messages.reverse())
      })
      .catch(err => console.log(err))
  }

  const send = e => {
    e.preventDefault()
    const socket = socketIOClient(host)
    socket.emit('send message', { user: username, message: e.target.message.value })
    e.target.message.value = ''
  }

  useEffect(() => {
    const socket = socketIOClient(host)
    socket.on('print message', message => {
      setMessages([ message, ...messages ])
    })
  })

  return (
    <div className="App">
      {
        isRegistered
          ? <Chat send={send} messages={messages} user={username}/>
          : <RegisterForm register={register} />
      }
    </div>
  )
}

export default App
