import React from "react";
import Contacts from "./Contacts";
import { messages, contacts } from "../data";
import Messages from "./Messages.jsx";
import Messageform from "./Messageform";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
     <Contacts/>
      <main>
        <h2>Messages</h2>
        <Messages/>
        <Messageform/>
      </main>
    </div>
  );
}

export default App;
