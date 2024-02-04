import "./Header.css";
import { HiOutlineMoon } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button type="button">
        <HiOutlineMoon />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
