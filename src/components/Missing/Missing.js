import "./Missing.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Missing = ({ fetchError, flagDetailsPage }) => {
  const { darkMode } = useContext(DataContext);
  return (
    <div
      className={
        darkMode ? "missing-page dark-mode" : "missing-page light-mode"
      }
      style={flagDetailsPage ? { padding: "0" } : null}
    >
      <h2 className="missing-title">{fetchError}</h2>
      <p className="missing-message">Well, that's disappointing.</p>
      <p>
        <Link to="/" className={darkMode ? "dark-mode" : "light-mode"}>
          <button
            type="button"
            className={darkMode ? "dark-mode" : "light-mode"}
          >
            Visit Our Homepage
          </button>
        </Link>
      </p>
    </div>
  );
};

Missing.defaultProps = {
  fetchError: "Page Not Found",
};

export default Missing;
