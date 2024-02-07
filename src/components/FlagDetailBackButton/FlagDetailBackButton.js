import "./FlagDetailBackButton.css";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useContext } from "react";
import DataContext from "../context/DataContext";

import { Link } from "react-router-dom";

const FlagDetailBackButton = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <Link to="/" className="back-button-link">
      <button
        className={
          darkMode ? "back-button dark-mode" : "back-button light-mode"
        }
        title="Back to Home Page"
        type="button"
        tabIndex="-1"
      >
        <LiaLongArrowAltLeftSolid />
        Back
      </button>
    </Link>
  );
};

export default FlagDetailBackButton;
