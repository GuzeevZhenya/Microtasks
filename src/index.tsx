// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { App } from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

//6
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"]);
//   console.log(typeof setUsers);
//   return <p>Тут будет список пользователей</p>;
// }

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что вернёт выражение: typeof setUsers?
//7
// import ReactDOM from "react-dom";
// import React, {useState} from 'react';
// import "./index.css";

// type UserType = {
//   id: number;
//   name: string;
//   age: number;
// };

// function User(props: UserType) {
//   return (
//     <li>
//       User {props.name}: {props.age} y.o.
//     </li>
//   );
// }

// function UsersList() {
//   const state = [
//     { id: 1, name: "Bob", age: 34 },
//     { id: 2, name: "Alex", age: 25 },
//     { id: 3, name: "Ann", age: 30 },
//     { id: 4, name: "John", age: 23 },
//   ];
//   const users = [
//     { id: 1, userName: "Bob", age: 34 },
//     { id: 2, userName: "Alex", age: 25 },
//     { id: 3, userName: "Ann", age: 30 },
//     { id: 4, userName: "John", age: 23 },
//   ];

//   const [usersList, setUsersList] = useState<Array<UserType>>(state);
//   return (
//     <main>
//       <h5>User list:</h5>
//       <p>Тут будет список пользователей</p>
//     </main>
//   );
// }

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что надо написать вместо XXX, чтобы код работал?
// // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // ❗ Ответ дать минимально возможным объёмом кода

//8
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//      const olderThen25Users = users.filter(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?

//9 object - ответ
// import React, { MouseEvent } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function Button() {
//   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//     console.log(typeof e === "object");
//   };
//   return <button onClick={onClickHandler}>Click</button>;
// }

// ReactDOM.render(<Button />, document.getElementById("root"));

// // Какой тип данных представляет аргумент функции-обработчика?
// // Что надо написать вместо ххх, что бы в консоль вывело true?
//10 props.id - ответ
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// type UserType = {
//   id: number;
//   name: string;
//   age: number;
// };

// type UserPropsType = UserType & {
//   deleteUser: (id: number) => void;
// };

// function User(props: UserPropsType) {
//   return (
//     <li>
//       <button onClick={() => props.deleteUser(props.id)}>x</button>
//       User {props.name}: {props.age} y.o.
//     </li>
//   );
// }

// function UsersList() {
//   const data: Array<UserType> = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ];
//   const [users, setUsers] = useState<Array<UserType>>(data);
//   const deleteUser = (userID: number) => {
//     const filteredUsers = users.filter((u) => u.id !== userID);
//     setUsers(filteredUsers);
//   };
//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} {...u} deleteUser={deleteUser} />
//         ))}
//       </ul>
//     </main>
//   );
// }

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что надо написать вместо xxx, чтобы код работал?

//11  value={userName} - ответ
// import React, { useState, MouseEvent, ChangeEvent } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function User() {
//   const [userName, setUserName] = useState<string>("");
//   return (
//     <div>
//       <p>{userName}</p>
//       <input
//         value={userName}
//         onChange={(e) => setUserName(e.currentTarget.value)}
//       />
//     </div>
//   );
// }

// ReactDOM.render(<User />, document.getElementById("root"));
// // Что надо написать вместо ххх, чтобы инпут был контролируемым?

//12 ответ - () => setNotes([])
import React, { useState, MouseEvent, ChangeEvent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Notes() {
  const [newNote, setNewNote] = useState<string>("");
  const [notes, setNotes] = useState<Array<string>>([]);
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setNewNote(e.currentTarget.value);
  const addNote = () => {
    setNotes([newNote, ...notes]);
    setNewNote("");
  };
  return (
    <div>
      <textarea value={newNote} onChange={onChangeHandler} onBlur={addNote} />
      <div>
        <button onClick={() => setNotes([])}>Clear notes list</button>
      </div>
      <h4>Notes:</h4>
      <div>
        {notes.map((n) => (
          <p>{n}</p>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<Notes />, document.getElementById("root"));
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?
