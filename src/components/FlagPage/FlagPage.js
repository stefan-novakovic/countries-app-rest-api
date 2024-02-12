import "./FlagPage.css";
import InputContainer from "../InputContainer/InputContainer";
import FlagContainer from "../FlagContainer/FlagContainer";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const FlagPage = () => {
  const { darkMode, myInfiniteScrollRef } = useContext(DataContext);
  return (
    <section
      className={darkMode ? "flag-page dark-mode" : "flag-page light-mode"}
    >
      <InputContainer />
      <FlagContainer />
      <div className="scroll-threshold" ref={myInfiniteScrollRef}></div>
    </section>
  );
};

export default FlagPage;
