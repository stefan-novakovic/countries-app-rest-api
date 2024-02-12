const FlagDetailSubRegion = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Sub Region: </span>
      {detailedCountry.subregion ? detailedCountry.subregion : "N/A"}
    </p>
  );
};

export default FlagDetailSubRegion;
