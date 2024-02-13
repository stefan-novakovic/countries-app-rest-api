import "./FlagDetailBackButton.css";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useContext } from "react";
import DataContext from "../context/DataContext";

import { Link } from "react-router-dom";

const FlagDetailBackButton = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <div className="back-button-wrapper">
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
    </div>
  );
};

export default FlagDetailBackButton;
