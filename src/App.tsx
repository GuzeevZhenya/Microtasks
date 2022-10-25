import React, { useState } from "react";
import { FullInput } from "./Components/FullInput";
import "./App.css";

function App() {
  let [message, setMessage] = useState([
    { message: "message-1" },
    { message: "message-2" },
    { message: "message-3" },
  ]);

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([...message, newMessage]);
  };
  return (
    <div className="App">
      <FullInput addMessage={addMessage} />
      {message.map((item, index) => {
        return <div key={index}>{item?.message}</div>;
      })}
    </div>
  );
}

export default App;
