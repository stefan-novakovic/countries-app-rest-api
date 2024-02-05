import "./Content.css";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import FlagContainer from "../FlagContainer/FlagContainer";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Content = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <main className={darkMode ? "content dark-mode" : "content light-mode"}>
      <div className="input-container">
        <Search />
        <Filter />
      </div>

      <FlagContainer />
    </main>
  );
};

export default Content;
