import React, { useState } from "react";
import "./App.css";
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";

function App() {
  let [message, setMessage] = useState([
    { message: "message-1" },
    { message: "message-2" },
    { message: "message-3" },
  ]);

  let [title, setTitle] = useState("");

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([...message, newMessage]);
  };
  return (
    <div className="App">
      {/* <FullInput addMessage={addMessage} /> */}
      <Input setTitle={setTitle} title={title} />
      <Button name={"+"} callback={callBackButtonHandler} />
      {message.map((item, index) => {
        return <div key={index}>{item?.message}</div>;
      })}
    </div>
  );
}

export default App;
