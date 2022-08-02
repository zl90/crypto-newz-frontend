import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <NavMenu />
      <ThemeToggle />
    </div>
  );
};

export default Header;
