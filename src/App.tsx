//1
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const results = useState<void>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]

//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

//2

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// export const UsersList = () => {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"]);

//   return <p>Тут будет список пользователей!</p>;
// };

//3
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// export const UsersList = () => {
//   const results = useState<Array<string>>(["Bob", "Alex", "Ann"]);

//   const users = results[0];
//   const setUsers = results[1];
//   console.log(results.length)

//   return <p>Тут будет список пользователей</p>;
// }

//4
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// export const UsersList = () => {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"]);
//   console.log(Array.isArray(users));
//   return <p>Тут будет список пользователей</p>;
// };

//5
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// export const UsersList = () => {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"]);
//   console.log(typeof setUsers);
//   return <p>Тут будет список пользователей</p>;
// };

//7
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// export const UsersList = () => {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)

//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }

//8
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// export const UsersList = () => {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"]);
//   const getUser = (user: string) => <li>{user}</li>;
//   const usersList = users.map(getUser);
//   console.log(Array.isArray(usersList))

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>{usersList}</ul>
//     </main>
//   );
// }

//9
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// export const UsersList = () => {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     console.log(typeof getUser)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(getUser)}
//             </ul>
//         </main>
//     )
// }

//10

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

type UserType = {
  id: number;
  name: string;
  age: number;
};

function User(props: UserType) {
  return (
    <li>
      User {props.name}: {props.age} y.o.
    </li>
  );
}

export const UsersList = () => {
  const state = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 25 },
    { id: 3, name: "Ann", age: 30 },
    { id: 4, name: "John", age: 23 },
  ];
  const users = [
    { id: 1, userName: "Bob", age: 34 },
    { id: 2, userName: "Alex", age: 25 },
    { id: 3, userName: "Ann", age: 30 },
    { id: 4, userName: "John", age: 23 },
  ];

  const [usersList, setUsersList] = useState<Array<UserType>>(XXX);
  return (
    <main>
      <h5>User list:</h5>
      <p>Тут будет список пользователей</p>
    </main>
  );
};
