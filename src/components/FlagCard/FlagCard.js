import "./FlagCard.css";
import FlagCardImage from "../FlagCardImage/FlagCardImage";
import FlagCardText from "../FlagCardText/FlagCardText";

const FlagCard = ({ country }) => {
  return (
    <div className="card">
      <FlagCardImage country={country} />
      <FlagCardText country={country} />
    </div>
  );
};

export default FlagCard;
