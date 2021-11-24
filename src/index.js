import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";

// let usersData = [
//   {
//     id: 1,
//     name: "name1",
//   },
//   {
//     id: 2,
//     name: "name2",
//   },
//   {
//     id: 3,
//     name: "name3",
//   },
// ];

// let massegesData = [
//   {
//     id: 1,
//     massege: "massege1",
//   },
//   {
//     id: 2,
//     massege: "massege2",
//   },
//   {
//     id: 3,
//     massege: "massege3",
//   },
// ];

// let postsData = [
//   {
//     id: 1,
//     text: "hi everybody",
//     llikes: 12,
//   },
//   {
//     id: 2,
//     text: "it my first blog",
//     llikes: 12,
//   },
//   {
//     id: 3,
//     text: "have a good day",
//     llikes: 12,
//   },
// ];

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
