// export const Wrapper = () => {
//   return <user city="minsk" />;
// };
// type PropsType = {
//   city: string;
// };
// export const user: React.FC<PropsType> = (props) => {
//   return <div>{props.city}</div>;
// };

//2.
// import ReactDOM from "react-dom";

// export const YoutubeVideo = () => {
//   return (
//     <div>
//       <VideoHeader />
//       <VideoContent />
//       <VideoStatistics />
//     </div>
//   );
// };
// export const VideoHeader = () => {
//   return <div>😀 Заголовок видео</div>;
// };
// export const VideoContent = () => {
//   return <div>📼 Контент видео</div>;
// };
// export const VideoStatistics = () => {
//   return <div>📊 Статистика лайков</div>;
// };

// ReactDOM.createRoot(
//   <div>
//     <YoutubeVideo />
//   </div>,
//   document.getElementById("root")
// );

//3.
// type UserPropsType = {
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

//4.
// type PropsType = {
//     city: string        // 'minsk'
//     country: string     // 'belarus'
//     coords?: string     // '53.917501,27.604851'
// }

// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk' country={""}/>
// }

// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }

//5
// !!!{props.name} - не подходит ОТВЕТ
// type PagePropsType = {
//   age: number;
//   name: string;
//   avatarUrl: string;
// };
// const Page: React.FC<PagePropsType> = (props) => {
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

//6
// type NewsType = {
//   title: string;
//   author: string;
// };
// type ArticleType = {
//   title: string;
//   date: string;
//   text: string;
// };
// type PagePropsType = {
//   news: NewsType[];
//   mainArticle: ArticleType;
// };
// export const Page: React.FC<PagePropsType> = (props) => {
//   return (
//     <div>
//       <article>
//         <h1>Название: {props.mainArticle.title}</h1>
//         <div>{props.mainArticle.date}</div>
//         <div>{props.mainArticle.text}</div>
//       </article>
//       <aside>
//         Articles:
//         <ul>
//           {props.news.map((n) => (
//             <li>
//               {n.title}, {n.author}
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </div>
//   );
// };

//7
// type UserWalletType = {
//   title: string;
//   amount: number;
// };
// type UserWalletPropsType = {
//   wallet: UserWalletType;
// };

// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//   return (
//     <div>
//       title: {props.wallet.title}, amount: {props.wallet.amount}
//     </div>
//   );
// };

// export const UserMoney = () => {
//   const wallets = [
//     { title: "bitcoin", amount: 1 },
//     { title: "$", amount: 100 },
//   ];

//   return (
//     <div>
//       <UserWallet wallet={wallets[0]} />
//       <UserWallet wallet={wallets[1]} />
//     </div>
//   );
// };

//8
// import ReactDOM from 'react-dom'

// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }

// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader videoName={props.video.title} />
//         <VideoContent videoContent={props.video.link} />
//         <VideoDescription videoDescription = {props.video.description} />
//     </div>
// }

// export const App1 = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }

//     return <YoutubeVideo video={video} />
// }

// ReactDOM.render(<App1 />,
//     document.getElementById('root')
// );

//9
// import ReactDOM from "react-dom";

// const CrazyButton = (props: any) => {
//   const style = {
//     color: props.fontColor,
//     backgroundColor: props.bgColor,
//   };

//   return <button style={style}>{props.title}</button>;
// };

// export const App1 = () => {
//   return (
//     <div>
//       <CrazyButton title={"delete"} fontColor={"white"} bgColor={"red"} />
//       <CrazyButton title={"add"} fontColor={"white"} bgColor={"green"} />
//     </div>
//   );
// };

// ReactDOM.render(<App1 />, document.getElementById("root"));

//10
// import ReactDOM from "react-dom";

// const Son = (props: any) => {
//   return <div>I am son. My name is {props.name}</div>;
// };

// const Father = (props: any) => {
//   return (
//     <div>
//       I am father. My name is {props.name}
//       <Son name={props.sonName} />
//     </div>
//   );
// };

// const Granny = (props: any) => {
//   return (
//     <div>
//       I am granny. My name is {props.name}
//       <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
//   );
// };

// export const App1 = () => {
//   return (
//     <div>
//       <Granny name={"Бабуля"} fatherName={"Батя"} sonName={"Сын"} />
//     </div>
//   );
// };

// ReactDOM.render(<App1 />, document.getElementById("root"));
