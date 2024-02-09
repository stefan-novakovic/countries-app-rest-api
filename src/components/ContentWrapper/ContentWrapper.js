import "./ContentWrapper.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const ContentWrapper = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <div
      className={
        darkMode ? "content-wrapper dark-mode" : "content-wrapper light-mode"
      }
    >
      <Header />
      <Main />
    </div>
  );
};

export default ContentWrapper;
