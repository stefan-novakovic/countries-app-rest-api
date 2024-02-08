const FlagDetailTopLevelDomain = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Top Level Domain: </span>
      {detailedCountry.tld ? detailedCountry.tld[0] : "N/A"}
    </p>
  );
};

export default FlagDetailTopLevelDomain;
