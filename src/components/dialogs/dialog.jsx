import React from "react";
import classes from "./dialog.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Massege from "./massege/Massege";

const Dialog = (props) => {
  let userElement = props.user.map((user, key) => (
    <DialogItem id={user.id} name={user.name} avatar={user.avatarUrl} />
  ));

  let massegeElement = props.massege.map((massege, key) => (
    <Massege
      massege={massege.massege}
      avatar={massege.avatarUrl}
      className={classes.blockMassege}
    />
  ));

  let massegeText = React.createRef();

  let massegeShow = () => {
    let text = massegeText.current.value;
    props.addMassege(text);
    massegeText.current.value = "";
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
