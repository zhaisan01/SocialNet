// import { findRenderedComponentWithType } from "react-dom/test-utils";

import classes from "./../dialog.module.css";

const Massege = (props) => {
  return <div className={classes.message}>{props.massege}</div>;
};

export default Massege;
