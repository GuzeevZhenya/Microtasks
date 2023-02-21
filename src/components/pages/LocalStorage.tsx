import React, { useState } from "react";

type TaskType = {
  id: number;
  title: string;
};

type CustomType = TaskType & {
  isDone: boolean;
};

export const LocalStorage = () => {
  const [showTasks, setShowTasks] = useState<CustomType[]>([]);
  const tasks: CustomType[] = [
    { id: 1, title: "html", isDone: true },
    { id: 2, title: "css", isDone: true },
    { id: 3, title: "js", isDone: true },
  ];

  const saveTodolistHandler = () => {
    const stateString = JSON.stringify(tasks);
    localStorage.setItem("taskKey", stateString);
  };
  const getTodolistHandler = () => {
    const getString = localStorage.getItem("taskKey");
    if (getString !== null) {
      setShowTasks(JSON.parse(getString));
    }
  };

  const removeLocalStorage = () => {
    localStorage.removeItem("taskKey");
    setShowTasks([]);
  };
  return (
    <div>
      <h1>LocalStorage</h1>
      <button onClick={saveTodolistHandler}>SaveTodo</button>
      <button onClick={getTodolistHandler}>ShowFromTodo</button>
      <button onClick={removeLocalStorage}>removeLocalStorage</button>

      {showTasks.length > 0 ? (
        <ul>
          {showTasks.map((t) => (
            <li>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
