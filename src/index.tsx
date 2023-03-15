// 1. isColored
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//           Меняю цвет по клику
//         </button>
//     )
// }

// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );

// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?

// 2.users.length
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>

//      const usersList = (users.length === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//            </ul>

//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//                 {usersList}
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?

//3.password.length
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }

// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );

// // Что надо вставить вместо XXX, чтобы код работал нормально?

// //4. !isCommentReady
// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function LongCommentChecker() {
//     const minSizeComment = 5
//     const [isCommentReady, setIsCommentReady] = useState<boolean>(false)
//     const [comment, setComment] = useState<string>('')

//     const onClickSendComment = () => {
//         if (comment.length > minSizeComment) {
//             setComment('')
//         }
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         const newComment = e.currentTarget.value
//         if (newComment.length > minSizeComment) {
//             setIsCommentReady(true)
//         } else {
//             setIsCommentReady(false)
//         }
//         setComment(newComment)
//     }

//     return (
//         <main>
//             <textarea
//                 placeholder={'Your comment must have more than 5 charters'}
//                 value={comment}
//                 onChange={onChangeHandler}
//             />
//             <div>
//                 <button
//                     disabled={!isCommentReady}
//                     onClick={onClickSendComment}>
//                     Send comment
//                 </button>
//             </div>
//         </main>
//     )
// }

// ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'));

// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия
// (комментарий должен быть больше 5 символов) должна раздизаблиться.
// ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде
// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия
// (комментарий должен быть больше 5 символов) должна раздизаблиться.
// ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде

// // 5.getColor(colors)
// import React, {ChangeEvent, useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Colorize() {

//   const [color, setColor] = useState<string>("black")
//   const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]

//   const styles = {
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//     backgroundColor: "black"
//   }

//   const getColor = (colors: string[]) => {
//     const nextColor = colors[Math.floor(Math.random() * colors.length)]
//     return nextColor
//   }

//   return (
//     <main>
//       <div style={{...styles, backgroundColor: color}}/>
//       <div>
//         <button
//           onClick={() => setColor(getColor(colors))}
//         >
//           Get random color
//         </button>
//       </div>
//     </main>
//   )
// }

// ReactDOM.render(
//   <Colorize/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы круг менял цвет по клику?

// //6.personalData.technologies
// import React, { ChangeEvent, useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// type UserType = {
//   id: number;
//   name: string;
//   personalData: PersonalDataType;
// };
// type PersonalDataType = {
//   gender: string;
//   age: number;
//   technologies: Array<TechnologiesType>;
// };
// type TechnologiesType = "HTML" | "CSS" | "React" | "JS/TS" | "Redux";

// function UsersList() {
//   const [users, setUsers] = useState<Array<UserType>>([
//     {
//       id: 1,
//       name: "Bob",
//       personalData: {
//         gender: "male",
//         age: 23,
//         technologies: ["HTML", "CSS", "React", "JS/TS", "Redux"],
//       },
//     },
//     {
//       id: 2,
//       name: "Alex",
//       personalData: {
//         gender: "male",
//         age: 21,
//         technologies: ["HTML", "CSS", "React"],
//       },
//     },
//     {
//       id: 3,
//       name: "Ann",
//       personalData: {
//         gender: "female",
//         age: 26,
//         technologies: ["HTML", "CSS", "JS/TS"],
//       },
//     },
//     {
//       id: 4,
//       name: "Helen",
//       personalData: {
//         gender: "female",
//         age: 31,
//         technologies: ["HTML", "CSS"],
//       },
//     },
//     {
//       id: 5,
//       name: "Donald",
//       personalData: {
//         gender: "male",
//         age: 28,
//         technologies: ["React", "JS/TS", "Redux"],
//       },
//     },
//   ]);

//   return (
//     <ul>
//       {users.map((u) => {
//         return u.personalData.technologies.length >= 5 ? (
//           <li key={u.id}>
//             {`User ${u.name}. ${u.personalData.age}. Ready to work.`}
//           </li>
//         ) : (
//           <li key={u.id}>{`User ${u.name}. ${u.personalData.age}. `}</li>
//         );
//       })}
//     </ul>
//   );
// }

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Те пользователи, у которых в стэке пять и более технологий, должны в списке
// // быть отмечены, как готовые к работе.
// // Что надо вставить вместо XXX, чтобы код работал нормально?

// //1. false
// type Student = {
//   id: number
//   name: string
// }
// type Students = Array<Student>
// type Friends = {
//   [key: string]: Array<string>
// }

// export const students: Students = [
//   {id: 1, name: "Bob"},
//   {id: 2, name: "Alex"},
//   {id: 3, name: "Ann"},
//   {id: 4, name: "Charley"},
// ]

// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar",],
//   2: ["Jack", "Lewis", "Thomas",],
//   3: ["William", "Michael", "Lewis",],
//   4: ["Oscar", "James", "William",],
// }

// console.log(Array.isArray(friends));

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение: Array.isArray(friends)?

// //2.true
// type StudentType = {
//   id: number
//   name: string
// }
// type Students = Array<StudentType>
// type Friends = {
//   [key: string]: Array<string>
// }

// export const students: Students = [
//   {id: 1, name: "Bob"},
//   {id: 2, name: "Alex"},
//   {id: 3, name: "Ann"},
//   {id: 4, name: "Charley"},
// ]

// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar",],
//   2: ["Jack", "Lewis", "Thomas",],
//   3: ["William", "Michael", "Lewis",],
//   4: ["Oscar", "James", "William",],
// }

// console.log(Array.isArray(students))
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение Array.isArray(students)?

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение Array.isArray(students)?

// //3."Thomas"
// type StudentType = {
//   id: number;
//   name: string;
//   age: number;
// };

// type FriendsType = {
//   [key: string]: Array<string>;
// };

// export const students: Array<StudentType> = [
//   { id: 1, name: "Bob", age: 34 },
//   { id: 2, name: "Alex", age: 23 },
//   { id: 3, name: "Ann", age: 25 },
//   { id: 4, name: "Charley", age: 20 },
// ];

// export const friends: FriendsType = {
//   1: ["Jack", "Oliver", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Lewis", "Michael"],
//   4: ["Oscar", "Thomas", "William"],
// };

// console.log(students[1], students[3]);

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Имеют ли студенты students[1] и students[3] общих друзей?
//Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.

//4."Michael"
// type StudentType = {
//   id: number;
//   name: string;
// };

// type FriendsType = {
//   [key: string]: Array<string>;
// };

// export const students: Array<StudentType> = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ];

// export const friends: FriendsType = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// };

// console.log(friends[3][1]);

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут:  friends[3][1]?

// //5."Thomas"
// type StudentType = {
//   id: number
//   name: string
// }

// type FriendsType = {
//   [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//   {id: 1, name: "Bob"},
//   {id: 2, name: "Alex"},
//   {id: 3, name: "Ann"},
//   {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//   1: ["Oliver", "Jack", "Oscar",],
//   2: ["Jack", "Lewis", "Thomas",],
//   3: ["William", "Michael", "Lewis",],
//   4: ["Oscar", "James", "William",],
// }

// console.log(friends[students[1].id][2])

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[1].id][2]?

//6 undefined
// type StudentType = {
//   id: number;
//   name: string;
// };

// type FriendsType = {
//   [key: string]: Array<String>;
// };

// export const students: Array<StudentType> = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ];

// export const friends: FriendsType = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// };
// console.log(friends[students[0].id][3]);
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[0].id][3]?

// //7. samuraiID
// import React, {useState} from "react";

// type samuraiType = {
//   id: string
//   name: string
//   status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//   name: CourseNameType
//   mentor: string
//   isDone: boolean
// }
// type TechnologiesType = {
//   [userID: string]: Array<CourseType>
// }

// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"

// export const samurai: Array<samuraiType> = [
//   {id: samuraiID_1, name: "Bob", status: "online"},
//   {id: samuraiID_2, name: "Alex", status: "offline"},
//   {id: samuraiID_3, name: "Ann", status: "offline"},
// ]

// export const technologies: TechnologiesType = {
//   [samuraiID_1]: [
//       {name: "HTML", mentor: "Svetlana", isDone: true},
//       {name: "JS", mentor: "Viktor", isDone: true},
//       {name: "React", mentor: "Dmitrij", isDone: false},
//       {name: "Redux", mentor: "Valera", isDone: false},
//       {name: "HomeWorks", mentor: "Ignat", isDone: true},
//   ],
//   [samuraiID_2]: [
//       {name: "HTML", mentor: "Svetlana", isDone: true},
//       {name: "JS", mentor: "Viktor", isDone: true},
//       {name: "React", mentor: "Dmitrij", isDone: true},
//       {name: "Redux", mentor: "Valera", isDone: false},
//       {name: "HomeWorks", mentor: "Ignat", isDone: true},
//   ],
//   [samuraiID_3]: [
//       {name: "HTML", mentor: "Svetlana", isDone: true},
//       {name: "JS", mentor: "Viktor", isDone: true},
//       {name: "React", mentor: "Dmitrij", isDone: false},
//       {name: "Redux", mentor: "Valera", isDone: false},
//       {name: "HomeWorks", mentor: "Ignat", isDone: false},
//   ],
// }

// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//   return {...technologies,
//        [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }
// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо XXX, чтобы функция работала?

//3 examen

//1.st_2.id
// type StudentType = {
//   id: number
//   name: string
// }

// type FriendsType = {
//   [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//   {id: 1, name: "Bob"},
//   {id: 2, name: "Alex"},
//   {id: 3, name: "Ann"},
//   {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//   1: ["Oliver", "Jack", "Oscar",],
//   2: ["Jack", "Lewis", "Thomas",],
//   3: ["William", "Michael", "Lewis",],
//   4: ["Oscar", "James", "William",],
// }

// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//   const result: Array<string> = []
//   friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)
//   return result
// }

// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// // Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// // у двух выбранных студентов.
// //Функция принимает параметром два объекта типа StudentType
// // и возвращает массив с именами общих друзей,
// //если они есть и пустой массив, если таковых нету.
// // Что надо написать вместо ххх, чтобы функция работала?

// //2.map
// import React, {useState} from "react";

// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }

// type AddressType = {
//     country: string
//     city: string
//     email: string
// }

// type AdressesType = {
//     [userID: string]: AddressType
// }

// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]

// export const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},

// }

// export const changeUserStatus = (userID: number, status: string) => {
//     return users.map(u => u.id === userID ? {...u, status} : u)
// }

// console.log(changeUserStatus(2,"online"))
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция changeUserStatus, которая меняет статус пользователя.
// // Что надо написать вместо ххх, чтобы функция работала корректно?

// //3. userID
// import React, {useState} from "react";

// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }

// type AddressType = {
//     country: string
//     city: string
//     email: string
// }

// type AdressesType = {
//     [userID: string]: AddressType
// }

// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]

// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},

// }

// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//          [userID]: {...addresses[userID], [key]: newValue}
//     }
// }

// console.log(updateUserAddress(2, "city", "Dnepropetrovsk"));
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?

// //4.samuraiID
// import React, {useState} from "react";

// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }

// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"

// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]

// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }

// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//      return {...technologies,
//          [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }
// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо ххх, чтобы функция работала корректно?

// 4 неделя

//1. action.type

// type ActionType = {
//   type: "SUM"|"SUB"|"MULT"|"DIV"
//   payload: number
// }

// export const calculator = (state: number, action: ActionType) => {
//   switch (action.type) {
//        case "SUM":
//            return state + action.payload
//        case "SUB":
//            return state - action.payload
//        case "DIV":
//            return state / action.payload
//        default:
//            return state
//    }
// }

// //Что надо написать вместо ХХХ, чтобы функция calculator работала?

//2. "MULT"

// type ActionType = {
//   type: "SUM"|"SUB"|"MULT"|"DIV"
//   payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//   switch (action.type) {
//       case "SUM":
//           return state + action.payload
//       case "SUB":
//           return state - action.payload
//       case "DIV":
//           return state / action.payload
//       default:
//           return state
//   }
// }

// //Обработка какого action.type не предусмотрена в функции calculator?

//3. type: "SUB"

// type ActionType = {
//   type: "SUM" | "SUB" | "MULT" | "DIV";
//   payload: number;
// };

// export const calculator = (state: number, action: ActionType): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload;
//     case "SUB":
//       return state - action.payload;
//     case "DIV":
//       return state / action.payload;
//     case "MULT":
//       return state * action.payload;
//     default:
//       return state;
//   }
// };

// const result = calculator(10, { type: "SUB", payload: 5 });
// console.log(result);
// //Что надо написать вместо XXX, что бы переменная result содержала значение 5?

//4. 10

// type ActionType = {
//   type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//   payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//   switch (action.type) {
//       case "SUM":
//           return state + action.payload
//       case "SUB":
//           return state - action.payload
//       case "DIV":
//           return state / action.payload
//       case "EXP":
//           return state ** action.payload
//       default:
//           return state
//   }
// }

// console.log(calculator(10, {type: "MULT", payload: 2}))

// //Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?

//5.  type:"EXP"
// type ActionType = {
//   type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP";
//   payload: number;
// };

// export const calculator = (state: number, action: ActionType): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload;
//     case "SUB":
//       return state - action.payload;
//     case "DIV":
//       return state / action.payload;
//     case "MULT":
//       return state * action.payload;
//     case "EXP":
//       return state ** action.payload;
//     default:
//       return state;
//   }
// };
// const result = calculator(10, { type:"EXP", payload: 0 });
// console.log(result)
// if (!(result - 1)) {
//   console.log("IT-INCUBATOR");
// }

// //Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?

//6. id:number newPassword:string

// type UserType = {
//   id: number;
//   userName: string;
//   email: string;
//   password: string;
// };

// type ChangeUserPasswordTypeAT = {
//   type: "CHANGE-USER-PASSWORD";
//   payload: {
//     id: number;
//     newPassword: string;
//   };
// };

// export const userReducer = (
//   state: UserType[],
//   action: ChangeUserPasswordTypeAT
// ): UserType[] => {
//   switch (action.type) {
//     case "CHANGE-USER-PASSWORD":
//       return state.map((u) =>
//         u.id === action.payload.id
//           ? { ...u, password: action.payload.newPassword }
//           : u
//       );
//     default:
//       return state;
//   }
// };

// //Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
// //В ответе напишите через пробел: XXX  YYY

// // examen
//1.isColored
// import React, { useState, MouseEvent } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function ColorButton() {
//   const [isColored, setIsColored] = useState<boolean>(false);
//   return (
//     <button
//       style={{ backgroundColor: `${isColored === true ? "red" : ""}` }}
//       onClick={() => setIsColored(true)}
//     >
//       Меняю цвет по клику
//     </button>
//   );
// }

// ReactDOM.render(<ColorButton />, document.getElementById("root"));

// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?

// //2 users.length
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"]);
//   const getUser = (user: string, i: number) => <li key={i}>{user}</li>;

//   const usersList =
//   users.length === 0 ? <p>List is empty</p> : <ul>{users.map(getUser)}</ul>;

//   return (
//     <main>
//       <button onClick={() => setUsers([])}>Clear list</button>
//       <h4>User list:</h4>
//       {usersList}
//     </main>
//   );
// }

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?

// //3 password.length
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function PasswordChecker() {
//   const [password, setPassword] = useState<string>("");
//   return (
//     <main>
//       <p>Your password must have more than 8 charters!</p>
//       <input
//         placeholder={"Enter your password"}
//         value={password}
//         onChange={(e) => setPassword(e.currentTarget.value)}
//         type={"password"}
//       />
//       {password.length < 9 && <p style={{ color: "red" }}>The password is too short!</p>}
//     </main>
//   );
// }

// ReactDOM.render(<PasswordChecker />, document.getElementById("root"));

// // Что надо вставить вместо XXX, чтобы код работал нормально?

//3."Michael"
// type StudentType = {
//   id: number;
//   name: string;
// };

// type FriendsType = {
//   [key: string]: Array<string>;
// };

// export const students: Array<StudentType> = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ];

// export const friends: FriendsType = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// };
// console.log(friends[3][1]);

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут:  friends[3][1]?

//4. undefined
// type StudentType = {
//   id: number
//   name: string
// }

// type FriendsType = {
//   [key: string]: Array<String>
// }

// export const students: Array<StudentType> = [
//   {id: 1, name: "Bob"},
//   {id: 2, name: "Alex"},
//   {id: 3, name: "Ann"},
//   {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//   1: ["Oliver", "Jack", "Oscar",],
//   2: ["Jack", "Lewis", "Thomas",],
//   3: ["William", "Michael", "Lewis",],
//   4: ["Oscar", "James", "William",],
// }
// console.log(friends[students[0].id][3]);

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[0].id][3]?

//6.st_2.id

// type StudentType = {
//   id: number;
//   name: string;
// };

// type FriendsType = {
//   [key: string]: Array<string>;
// };

// export const students: Array<StudentType> = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ];

// export const friends: FriendsType = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// };

// const getMutualFriends = (st_1: StudentType, st_2: StudentType) => {
//   const result: Array<string> = [];
//   friends[st_1.id].forEach((f) =>
//     friends[st_2.id].includes(f) ? result.push(f) : null
//   );
//   return result;
// };

// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// // Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// // у двух выбранных студентов.
// //Функция принимает параметром два объекта типа StudentType
// // и возвращает массив с именами общих друзей,
// //если они есть и пустой массив, если таковых нету.
// // Что надо написать вместо ххх, чтобы функция работала?

// //7. userID
// import React, { useState } from "react";

// type UserType = {
//   id: number;
//   name: string;
//   status: "online" | "offline";
// };

// type AddressType = {
//   country: string;
//   city: string;
//   email: string;
// };

// type AdressesType = {
//   [userID: string]: AddressType;
// };

// const users: Array<UserType> = [
//   { id: 1, name: "Bob", status: "online" },
//   { id: 2, name: "Alex", status: "offline" },
//   { id: 3, name: "Ann", status: "offline" },
// ];

// const addresses: AdressesType = {
//   1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
//   2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
//   3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },
// };

// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//   return { ...addresses, [userID]: { ...addresses[userID], [key]: newValue } };
// };
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?

//8.type: "SUB"

// type ActionType = {
//   type: "SUM" | "SUB" | "MULT" | "DIV";
//   payload: number;
// };

// export const calculator = (state: number, action: ActionType): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload;
//     case "SUB":
//       return state - action.payload;
//     case "DIV":
//       return state / action.payload;
//     case "MULT":
//       return state * action.payload;
//     default:
//       return state;
//   }
// };

// const result = calculator(10, { type: "SUB", payload: 5 });
// console.log(result);
// //Что надо написать вместо XXX, что бы переменная result содержала значение 5?

//9. type:"EXP"

// type ActionType = {
//   type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP";
//   payload: number;
// };

// export const calculator = (state: number, action: ActionType): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload;
//     case "SUB":
//       return state - action.payload;
//     case "DIV":
//       return state / action.payload;
//     case "MULT":
//       return state * action.payload;
//     case "EXP":
//       return state ** action.payload;
//     default:
//       return state;
//   }
// };
// const result = calculator(10, { type: "EXP", payload: 0 });
// if (!(result - 1)) {
//   console.log("IT-INCUBATOR");
// }

// //Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?

//10
// type UserType = {
//   id: number;
//   userName: string;
//   email: string;
//   password: string;
// };

// type ChangeUserPasswordTypeAT = {
//   type: "CHANGE-USER-PASSWORD";
//   payload: {
//     XXX;
//     YYY;
//   };
// };

// export const userReducer = (
//   state: UserType[],
//   action: ChangeUserPasswordTypeAT
// ): UserType[] => {
//   switch (action.type) {
//     case "CHANGE-USER-PASSWORD":
//       return state.map((u) =>
//         u.id === action.payload.id
//           ? { ...u, password: action.payload.newPassword }
//           : u
//       );
//     default:
//       return state;
//   }
// };

// //Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
// //В ответе напишите через пробел: XXX  YYY
//3 месяц

// 1. не changeTrackAC
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }

// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case changeTrackAC:
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

//Какой тип должен быть вместо XXX?

// //2 changeTrackPlayStatusAC("Paused")
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-STATUS-CHANGED':
//             return {
//                 ...state,
//                 status: action.status
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }

// const newState = playerReducer(state, changeTrackPlayStatusAC("Paused"))
// console.log(newState.status === 'Paused')

// //Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true

//3.  не  volume: action.volume
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 volume: action.volume
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// // Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.

//4. action.trackId

// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "TRACK-LIKED":
//       return {
//         ...state,
//         [action.trackId]: {
//           ...state[action.trackId],
//           likesCount: state[action.trackId].likesCount + 1,
//         },
//       };
//     default:
//       return state;
//   }
// };

// const likeTrackAC = (trackId: number) => ({ type: "TRACK-LIKED", trackId });

// const state = {
//   12: { id: 12, likesCount: 10 },
//   14: { id: 14, likesCount: 2 },
//   100: { id: 100, likesCount: 0 },
// };
// const newState = reducer(state, likeTrackAC(14));

// console.log(newState[14].likesCount === 3);

// // Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// // ❗ Захардкодженные значения использовать запрещено

//5
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return XXX
//         default:
//             return state
//     }
// }

// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})

// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, addTrackAC(300))

// console.log(newState[3].likesCount === 0)

// // Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?

//6  track.id != action.trackId
// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "TRACK-DELETED":
//       return state.filter((track: any) =>  track.id != action.trackId);
//     default:
//       return state;
//   }
// };

// const deleteTrackAC = (trackId: number) => ({ type: "TRACK-DELETED", trackId });

// const state = [
//   { id: 12, likesCount: 10 },
//   { id: 14, likesCount: 2 },
//   { id: 100, likesCount: 0 },
// ];
// const newState = reducer(state, deleteTrackAC(14));

// console.log(newState.length === 2);

// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?

// //7 "TRACK-URL-CHANGED" "TRACK-MUTED" "TRACK-REWOUND-TO-START"
// type StateType = {
//   volume: number; // in percents
//   trackUrl: string; // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number; // milliseconds,
// };

// export const reducer = (state: StateType, action: any) => {
//   switch (action.type) {
//     case "TRACK-URL-CHANGED":
//       return {
//         ...state,
//         trackUrl: action.url,
//       };
//     case "TRACK-MUTED":
//       return {
//         ...state,
//         volume: 0,
//       };
//     case "TRACK-REWOUND-TO-START":
//       return {
//         ...state,
//         currentPlayPosition: 0,
//       };
//     default:
//       return state;
//   }
// };

// const muteTrackAC = () => ({ type: "TRACK-MUTED" });
// const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url });
// // перемотатьНаНачало:
// const rewindToStart = () => ({ type: "TRACK-REWOUND-TO-START" });

// // Какие типы должны быть вместо XXX, YYY и ZZZ?
// // Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'

//2 неделя

//1. subscribe
// import { combineReducers, createStore } from "redux";

// let initialState = { items: [{ name: "Dimych" }, { name: "Ignat" }] };
// const usersReducer = (state = initialState, action: any) => {
//   return state;
// };

// const store = createStore(
//   combineReducers({
//     users: usersReducer,
//   })
// );

// store.subscribe(() => {
//   console.log("state changed");
// });

// store.dispatch({ type: "ANY" });

// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?

// //2. store.getState()
// import {combineReducers, createStore} from 'redux'

// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// const store = createStore(combineReducers({
//     users: usersReducer
// }))

// store.subscribe(() => {
//     const state = store.getState()
//     console.log(state)
// })

// store.dispatch({type: 'ANY'})

// //Что нужно написать вместо XXX, чтобы получить актуальный стейт?

// //3. useSelector(selector)
// import {combineReducers, createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector} from 'react-redux'
// import React from 'react'

// let initialState = {items:
//    [
//     {id: 1, name: 'Dimych'},
//     {id: 2, name: 'Ignat'}
//    ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }

// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })

// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>

// const selector = (state: RootStateType) => state.users.items

// const Users = () => {

//   const users = useSelector(selector);

//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }

// ReactDOM.render(<div>
//         <Provider store={store}>
//             <Users/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода

// //4 useReducer useState
// import React, { useState, useReducer, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const changeCounter = (state: number, action: any): number => {
//   switch (action.type) {
//     case "INC_VALUE":
//       return state + 1;
//     case "RESET":
//       return 0;
//     case "DEC_VALUE":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// function Counter() {
//   const [value, setValue] = useReducer(changeCounter, 0);
//   const [isCounter, setIsCounter] = useState(true);
//   const commonStyles: React.CSSProperties = {
//     border: "1px solid black",
//     margin: "100px auto",
//     width: "300px",
//     height: "150px",
//     textAlign: "center",
//   };
//   const btnStyles: React.CSSProperties = {
//     color: "white",
//     fontWeight: "bold",
//     backgroundColor: "darkgray",
//     borderRadius: "3px",
//     minWidth: "40px",
//   };

//   return (
//     <div style={commonStyles}>
//       {isCounter ? (
//         <div>
//           <div style={{ marginBottom: "20px" }}>
//             <h2>{value}</h2>
//             <button
//               style={{ ...btnStyles, backgroundColor: "red" }}
//               onClick={() => setIsCounter(false)}
//             >
//               OFF
//             </button>
//           </div>
//           <button
//             style={btnStyles}
//             onClick={() => setValue({ type: "INC_VALUE" })}
//           >
//             +
//           </button>
//           <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>
//             0
//           </button>
//           <button
//             style={btnStyles}
//             onClick={() => setValue({ type: "DEC_VALUE" })}
//           >
//             -
//           </button>
//         </div>
//       ) : (
//         <div style={{ textAlign: "center" }}>
//           <h2>Counter not working</h2>
//           <button
//             style={{ ...btnStyles, backgroundColor: "green" }}
//             onClick={() => setIsCounter(true)}
//           >
//             ON
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// ReactDOM.render(<Counter />, document.getElementById("root"));
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.

//5 Provider store appStore
// import React from "react";
// import { createStore } from "redux";
// import { Provider, useSelector, useDispatch } from "react-redux";
// import ReactDOM from "react-dom";

// type StudentType = {
//   id: number;
//   name: string;
//   age: number;
// };

// const initState = {
//   students: [
//     { id: 1, name: "Bob", age: 23 },
//     { id: 2, name: "Alex", age: 22 },
//   ] as Array<StudentType>,
// };
// type AddStudentAT = {
//   type: "ADD-STUDENT";
//   name: string;
//   age: number;
//   id: number;
// };

// type InitialStateType = typeof initState;

// const studentsReducer = (
//   state: InitialStateType = initState,
//   action: AddStudentAT
// ): InitialStateType => {
//   switch (action.type) {
//     case "ADD-STUDENT":
//       return {
//         ...state,
//         students: [
//           ...state.students,
//           {
//             name: action.name,
//             age: action.age,
//             id: action.id,
//           },
//         ],
//       };
//   }
//   return state;
// };

// const appStore = createStore(studentsReducer);
// type RootStateType = ReturnType<typeof studentsReducer>;

// const StudentList = () => {
//   const students = useSelector((state: RootStateType) => state.students);
//   return (
//     <ul>
//       {students.map((s) => (
//         <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>
//       ))}
//     </ul>
//   );
// };
// const App = () => {
//   return <StudentList />;
// };

// ReactDOM.render(
//   <div>
//     <Provider store={appStore}>
//       <App />
//     </Provider>
//   </div>,
//   document.getElementById("root")
// );

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?

//6 dispatch RemoveStudentAC s.id
// import { createStore } from "redux";
// import ReactDOM from "react-dom";
// import { Provider, useSelector, useDispatch } from "react-redux";
// import React from "react";

// const students = {
//   students: [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Donald" },
//     { id: 4, name: "Ann" },
//   ],
// };
// type RemoveStudentAT = {
//   type: "REMOVE-STUDENT";
//   id: number;
// };
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//   type: "REMOVE-STUDENT",
//   id,
// });

// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//   switch (action.type) {
//     case "REMOVE-STUDENT":
//       return {
//         ...state,
//         students: state.students.filter((s) => s.id !== action.id),
//       };
//   }
//   return state;
// };

// const store = createStore(studentsReducer);
// type RootStateType = ReturnType<typeof studentsReducer>;

// const StudentList = () => {
//   const listItemStyles = {
//     width: "100px",
//     borderBottom: "1px solid gray",
//     cursor: "pointer",
//   };
//   const students = useSelector((state: RootStateType) => state.students);
//   const dispatch = useDispatch();
//   const studentsList = students.map((s) => {
//     const removeStudent = () => {
//         dispatch(RemoveStudentAC(s.id));
//     };
//     return (
//       <li key={s.id} style={listItemStyles} onClick={removeStudent}>
//         {s.name}
//       </li>
//     );
//   });
//   return <ol>{studentsList}</ol>;
// };

// ReactDOM.render(
//   <div>
//     <Provider store={store}>
//       <StudentList />
//     </Provider>
//   </div>,
//   document.getElementById("root")
// );

// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// // удалялся из списка? Напишите через пробел.

// 3 неделя
import React, { useState } from "react";
import ReactDOM from "react-dom";

export const TempManager = () => {
  const [temp, setTemp] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const resetTemp = () => setTemp(0);
  const increaseSeconds = () => setSeconds(seconds + 100);

  return (
    <>
      <TempDisplay temp={temp} reset={resetTemp} />
      <div>
        <p>
          <b>Секунды:</b> {seconds} с
        </p>
        <button onClick={increaseSeconds}>Увеличить время на 100 секунд</button>
      </div>
    </>
  );
};

const TempDisplay = React.memo((props: any) => {
  console.log("Render TempDisplay");
  return (
    <div>
      <p>
        <b>Температура</b>: {props.temp} &#176;
      </p>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
});

ReactDOM.render(<TempManager />, document.getElementById("root"));

//При увеличении времени (при клике на button) компонент TempDisplay
//тоже перерисовывается. Эта перерисовка является избыточной.
//Найдите в чем причина лишних перерисовок.
//Исправленную версию строки напишите в качестве ответа.

//Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)
