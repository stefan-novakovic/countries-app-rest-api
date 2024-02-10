import "./Header.css";
import { HiOutlineMoon } from "react-icons/hi2";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <header className={darkMode ? "header dark-mode" : "header light-mode"}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <h1
          tabIndex="0"
          onClick={() => {
            navigate(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate(0);
          }}
        >
          Where in the world?
        </h1>
      </div>
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
