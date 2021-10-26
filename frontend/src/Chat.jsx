import React from 'react'

const Chat = ({ send, messages, user }) => (
  <div>
    <form onSubmit={send} className='form'>
      <input type="text" name="message" placeholder='Message' required className='roboto'/>
      <input type="submit" value="Send" className='roboto'/>
    </form>
    { console.log("client->chat->messages", messages) }
    <ul className="message-list">
      {
        messages.map(message => (
          <li className="message" key={new Date() * Math.random()}>
            <span className="user roboto">{message.user}: </span>{message.message}
          </li>
        ))
      }
    </ul>
  </div>
)

export default Chat