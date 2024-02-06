import "./FlagDetailSubregion.css";

const FlagDetailSubregion = ({ detailedCountry }) => {
  return (
    <p>
      Subregion: {detailedCountry.subregion ? detailedCountry.subregion : "N/A"}
    </p>
  );
};

export default FlagDetailSubregion;
