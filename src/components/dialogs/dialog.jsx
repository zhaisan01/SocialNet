// import { findRenderedComponentWithType } from "react-dom/test-utils";
import React from "react";
import classes from "./dialog.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Massege from "./massege/Massege";

const Dialog = (props) => {
  let userElement = props.user.map((user) => (
    <DialogItem id={user.id} name={user.name} avatar={user.avatarUrl} />
  ));

  let massegeElement = props.massege.map((massege) => (
    <Massege
      massege={massege.massege}
      avatar={massege.avatarUrl}
      className={classes.blockMassege}
    />
  ));

  let massegeText = React.createRef();

  let massegeShow = () => {
    let text = massegeText.current.value;

    alert(text);
  };

  return (
    <div className={classes.dialog}>
      <div className={classes.dialog_items}>{userElement}</div>
      <div className={classes.messages}>
        {massegeElement}
        <div className={classes.textSend}>
          <textarea ref={massegeText}></textarea>
          <button onClick={massegeShow}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
