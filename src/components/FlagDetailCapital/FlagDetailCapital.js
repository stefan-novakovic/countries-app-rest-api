import "./FlagDetailCapital.css";

const FlagDetailCapital = ({ detailedCountry }) => {
  return (
    <p>
      Capital:{" "}
      {detailedCountry.capital
        ? detailedCountry.capital.join(", ")
        : detailedCountry.name.common === "Macau"
        ? "Macau"
        : "N/A"}
    </p>
  );
};

export default FlagDetailCapital;
