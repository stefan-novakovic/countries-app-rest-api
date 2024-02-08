const FlagDetailCapital = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Capital: </span>
      {detailedCountry.capital
        ? detailedCountry.capital.join(", ")
        : detailedCountry.name.common === "Macau"
        ? "Macau"
        : "N/A"}
    </p>
  );
};

export default FlagDetailCapital;
