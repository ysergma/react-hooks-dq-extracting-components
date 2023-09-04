import React from 'react'
import { messages, contacts } from "../data";



const Messages = () => {
  return (
    
    <section className="messages">
          <ul>
        {
          messages.map((message,index)=>          
          <li className={`message ${message.type}`}>
          <div className="icon">{message.content.charAt(0)}</div>
          <span className="content">{message.content}</span>
        </li>
        
        
           )
        }
            
          </ul>
        </section>
  )
}

export default Messages