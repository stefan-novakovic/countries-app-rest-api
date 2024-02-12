const FlagDetailCapital = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Capital: </span>
      {typeof detailedCountry.capital !== "undefined" &&
      detailedCountry.capital.length > 0
        ? detailedCountry.capital.join(", ")
        : detailedCountry.name.common === "Macau"
        ? "Macau"
        : "N/A"}
    </p>
  );
};

export default FlagDetailCapital;
