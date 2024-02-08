const FlagDetailRegion = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Region: </span>
      {detailedCountry.region}
    </p>
  );
};

export default FlagDetailRegion;
