// import { findRenderedComponentWithType } from "react-dom/test-utils";

import classes from "./dialog.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Massege from "./massege/Massege";

const Dialog = (props) => {
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
  let userElement = props.user.map((user) => (
    <DialogItem id={user.id} name={user.name} />
  ));
  let massegeElement = props.massege.map((massege) => (
    <Massege massege={massege.massege} />
  ));
  return (
    <div className={classes.dialog}>
      <div className={classes.dialog_items}>{userElement}</div>
      <div className={classes.messages}>{massegeElement}</div>
    </div>
  );
};

export default Dialog;
