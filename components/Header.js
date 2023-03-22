import classes from "./Header.module.css";
import NavBar from "./NavBar";


const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <h1 className={classes.title}>laissez-faire</h1>
        <h3>do as they will</h3>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
