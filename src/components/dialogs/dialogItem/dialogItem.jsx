// import { findRenderedComponentWithType } from "react-dom/test-utils";
import { NavLink } from "react-router-dom";
import classes from "./../dialog.module.css";

const DialogItem = (props) => {
  const url = `/dialogs/${props.id}`;
  return (
    <div className={classes.items}>
      <NavLink to={url}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
