import React, { useState } from "react";
import { useKeyPress } from "./Hooks/useKeyPress";
import { useInterval } from "./Hooks/useInterval";
import useThrottle from "./Hooks/useThrottle";
export const App = () => {
  const closeModalKeyPress = useKeyPress("Escape");

  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  const [inputValue, setInputValue] = useState("");

  useThrottle(() => {
    // вызов API
  }, 500);

  return <div>App</div>;
};
