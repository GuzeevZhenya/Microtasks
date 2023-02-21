import React, { useEffect, useState } from "react";
import "./App.css";

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("setTimeout");

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("tick" + counter);
  //     setCounter((state) => state + 1);
  //   }, 1000);
  // }, []);

  return (
    <>
      Hi, {counter} {fake}
    </>
  );
};

export const App = () => {
  return <SetTimeoutExample />;
};
