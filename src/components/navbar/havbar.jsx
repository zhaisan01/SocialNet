import { NavLink } from "react-router-dom";
import classes from "./havbar.module.css";
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item}`}>
        <NavLink to='/dialogs'>Massege</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/setting'>Setting</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
