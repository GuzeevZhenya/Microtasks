//2
// import React, { useState } from "react";

// import "./index.css";

// type UserType = {
//   id: number;
//   name: string;
//   age: number;
// };

// function User(props: UserType) {
//   return (
//     <li>
//       Student {props.name}: {props.age} y.o.
//     </li>
//   );
// }

// export const UsersList = () => {
//   const data: Array<UserType> = [
//     { id: 1, name: "Bob", age: 34 },
//     { id: 2, name: "Alex", age: 29 },
//     { id: 3, name: "Ann", age: 25 },
//     { id: 4, name: "John", age: 36 },
//   ];
//   const [users, setUsers] = useState<Array<UserType>>(data);
//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} {...u} />
//         ))}
//       </ul>
//     </main>
//   );
// };

//3
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
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

// export const UsersList = () => {
//   const data: Array<UserType> = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ];
//   const [users, setUsers] = useState<Array<UserType>>(data);
//   // Пользователи старше 25 лет:
//   // const olderThen25Users = users.filter(u => u.age > 25)
//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>{/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}</ul>
//     </main>
//   );
// }

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что надо написать вместо xxx, чтобы код работал?

//4
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
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

// export const UsersList = () => {
//   const data: Array<UserType> = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ];
//   const [users, setUsers] = useState<Array<UserType>>(data);
//   // Необходимо отрендерить список пользователей старше 25 лет:
//   const getOlderThen25Users = (u: UserType) => u.age > 25;
//   const olderThen25Users = users.filter(getOlderThen25Users);
//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>{/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}</ul>
//     </main>
//   );
// };

// ReactDOM.render(<UsersList />, document.getElementById("root"));

// Что надо написать вместо xxx, чтобы код работал?

//5

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
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

// export const UsersList = () => {
//   const data: Array<UserType> = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ];
//   const [users, setUsers] = useState<Array<UserType>>(data);
//   // Необходимо отрендерить список ользователей старше 25 лет:
//   const getOlderThen25Users = (u: UserType) => u.age > 25;
//   const olderThen25Users = users.filter(getOlderThen25Users);
//   console.log(Array.isArray(olderThen25Users));
//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {olderThen25Users.map((u) => (
//           <User key={u.id} {...u} />
//         ))}
//       </ul>
//     </main>
//   );
// };

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что вернёт выражение: Array.isArray(olderThen25Users)

//6
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
//   const deleteUser = () => props.deleteUser(props.id);
//   return (
//     <li>
//       <button onClick={deleteUser}>x</button>
//       User {props.name}: {props.age} y.o.
//     </li>
//   );
// }

// export const UsersList = () => {
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
// };

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что надо написать вместо xxx, чтобы код работал?

//7
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// // function Button() {
// export const UsersList = () => {
//   return <button onClick={() => alert()}>Click</button>;
// };

// // Что надо написать вместо ххх,
// // что бы на странице появился пустой alert при клике по кнопке?

//8
// import React, { MouseEvent } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// // function Button() {
// export const UsersList = () => {
//   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//     console.log(typeof e === "object");
//   };
//   return <button onClick={onClickHandler}>Click</button>;
// };

// // Какой тип данных представляет аргумент функции-обработчика?
// // Что надо написать вместо ххх, что бы в консоль вывело true?

//9
// import React, { useState, MouseEvent } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// // function Button() {
// export const UsersList = () => {
//   const [tagName, setTagName] = useState<string>();
//   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//     // setTagName(e.xxx.tagName);
//     console.log(e.currentTarget.tagName);
//   };
//   return (
//     <>
//       <p>{tagName}</p>
//       <button onClick={onClickHandler}>
//         <span>Click</span>
//       </button>
//     </>
//   );
// };

// // Что надо написать вместо ххх, что бы на странице появился текст BUTTON?

//10
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

// export const User = (props: UserPropsType) => {
//   return (
//     <li>
//       <button onClick={() => props.deleteUser(props.id)}>x</button>
//       User {props.name}: {props.age} y.o.
//     </li>
//   );
// };

// export const UsersList = () => {
//   const data: Array<UserType> = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ];
//   const [users, setUsers] = useState<Array<UserType>>(data);
//   const deleteUser = (userID: number) => {
//     setUsers(users.filter((u) => u.id !== userID));
//   };
//   return (
//     <main>
//       <h4>Users list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} {...u} deleteUser={deleteUser} />
//         ))}
//       </ul>
//     </main>
//   );
// };

// // В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// // Какой тип было бы указать правильнее?
