import React from "react";
import { Button } from "./Button";
import "./App.css";

function App() {
  // const clickEvent = (event: string) => {
  //   console.log("hi");
  // };

  const onClickHandler = (name: string) => {
    console.log(name);
  };

  const foo1 = () => {
    console.log("10200");
  };
  const foo2 = (price: number) => {
    console.log(price);
  };

  const ButtonClick = (subscriber: string) => {
    console.log(subscriber);
  };
  const ButtonRemove = (subscriber: string) => {
    console.log(subscriber);
  };
  return (
    <div className="App">
      {/* <button onClick={(event) => clickEvent('hi')}>Click</button> */}
      {/* <button onClick={(event: MouseEvent<HTMLButtonElement></HTMLButtonElement>)=>onClickHandler("Vasia")}>Click</button> */}
      {/* <button onClick={() => onClickHandler("info")}>Button</button>
      <button onClick={foo1}>Click1</button>
      <button onClick={() => foo2(100200)}>Click1</button> */}
      <Button name={"click"} callBack={() => ButtonClick("click")} />
      <Button name={"remove"} callBack={() => ButtonRemove("remove")} />
    </div>
  );
}

export default App;
