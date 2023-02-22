import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

export const SetTimeoutExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  return (
    <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
      <div>
        a: {resultA}
        b: {resultB}
      </div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("SECRET");
  return (
    <div>
      {props.users.map((u, i) => (
        <div>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const App = () => {
  console.log("React Memo");
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dima", "Vity", "Zhenya", "Dok"]);

  const newArray = useMemo(() => {
    const newArray = users.filter((u) => u.toLowerCase().indexOf("a") > -1);
    return newArray;
  }, []);
  return (
    <>
      <SetTimeoutExample />
      <br />
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <Users users={newArray} />
    </>
  );
};
