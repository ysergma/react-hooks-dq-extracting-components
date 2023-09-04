
import { messages, contacts } from "../data";

import React from 'react'

const Contacts = () => {
  return (
    <nav>
    <h2>Contacts</h2>
    <ul className="contacts">
      {contacts.map((contact,index)=>
       <li className="contact">
       <div className="icon">{contact.name.charAt(0)}</div>
       {contact.name}
     </li>
      )
      }
    </ul>
  </nav>
  )
}

export default Contacts