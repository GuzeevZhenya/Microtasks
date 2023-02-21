import React, { useState } from "react";
import "./App.css";

// 1. type UserPropsType = {
//   name: string;
//   description: string;
// };
// export const User: React.FC<UserPropsType> = (props) => {
//   return (
//     <div>
//       <h1>Имя: {props.name}</h1>
//       <div>Описание: {props.description}</div>
//     </div>
//   );
// };

// 2.
// type PagePropsType = {
//   age: number;
//   name: string;
//   avatarUrl: string;
// };
// export const Page: React.FC<PagePropsType> = (props) => {
//   return <User a={props.age} n={props.name} />;
// };
// type UserPropsType = {
//   a: number;
//   n: string;
// };
// export const User: React.FC<UserPropsType> = (props) => {
//   return (
//     <div>
//       name: {props.n}, age: {props.a}
//     </div>
//   );
// };

// export const App = () => {
//   return <Page age={0} name={""} avatarUrl={""} />;
// };

// Что нужно написать вместо xxx и yyy?
// Ответ дайте через пробел, например: blabla onClick(props)

//3
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }

// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }

// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]

//     return <div>
//         <UserWallet wallet={xxx} />
//         <UserWallet wallet={yyy} />
//     </div>
// }