import "./Header.css";
import { HiOutlineMoon } from "react-icons/hi2";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DataContext);
  return (
    <header className={darkMode ? "header dark-mode" : "header light-mode"}>
      <Link to="/#" className={darkMode ? "dark-mode" : "light-mode"}>
        <h1>Where in the world?</h1>
      </Link>
      <button
        className={
          darkMode ? "dark-mode-btn dark-mode" : "dark-mode-btn light-mode"
        }
        type="button"
        onClick={() => setDarkMode(!darkMode)}
      >
        <HiOutlineMoon />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
