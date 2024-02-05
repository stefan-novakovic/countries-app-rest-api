import "./FlagCard.css";
import FlagCardImage from "../FlagCardImage/FlagCardImage";
import FlagCardText from "../FlagCardText/FlagCardText";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const FlagCard = ({ country }) => {
  const { darkMode } = useContext(DataContext);
  return (
    <Link to={`/country/${country.name.common}`}>
      <div
        id={country.name.common}
        className={darkMode ? "card dark-mode" : "card light-mode"}
      >
        <FlagCardImage country={country} />
        <FlagCardText country={country} />
      </div>
    </Link>
  );
};

export default FlagCard;
