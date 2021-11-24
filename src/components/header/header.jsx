import classes from "./header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <img src='/img/logo.png' alt='' />
      <img
        src='https://openconnectivity.org/wp-content/uploads/2018/01/SIoT-logo-PNG.png'
        alt=''
      />
    </header>
  );
};

export default Header;
