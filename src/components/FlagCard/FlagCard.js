import "./FlagCard.css";
import FlagCardImage from "../FlagCardImage/FlagCardImage";
import FlagCardText from "../FlagCardText/FlagCardText";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const FlagCard = ({ country }) => {
  const { darkMode } = useContext(DataContext);
  return (
    <div className={darkMode ? "card dark-mode" : "card light-mode"}>
      <FlagCardImage country={country} />
      <FlagCardText country={country} />
    </div>
  );
};

export default FlagCard;
