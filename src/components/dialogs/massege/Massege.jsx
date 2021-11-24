// import { findRenderedComponentWithType } from "react-dom/test-utils";

import classes from "./../dialog.module.css";

const Massege = (props) => {
  return (
    <div className={classes.message}>
      <img src={props.avatar} alt='' />
      <div className={classes.messageStyle}>
        <p>{props.massege}</p>
      </div>
    </div>
  );
};

export default Massege;
