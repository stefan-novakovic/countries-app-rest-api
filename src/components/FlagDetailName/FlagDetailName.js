import "./FlagDetailName.css";

const FlagDetailName = ({ detailedCountry }) => {
  return <h2>{detailedCountry.name.common}</h2>;
};

export default FlagDetailName;
