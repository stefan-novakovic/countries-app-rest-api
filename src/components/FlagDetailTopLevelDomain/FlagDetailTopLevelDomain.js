import "./FlagDetailTopLevelDomain.css";

const FlagDetailTopLevelDomain = ({ detailedCountry }) => {
  return (
    <p>
      Top Level Domain: {detailedCountry.tld ? detailedCountry.tld[0] : "N/A"}
    </p>
  );
};

export default FlagDetailTopLevelDomain;
