import "./FlagDetailLanguages.css";

const FlagDetailLanguages = ({ detailedCountry }) => {
  return (
    <p>
      Languages:{" "}
      {detailedCountry.languages
        ? Object.values(detailedCountry.languages).join(", ")
        : "N/A"}
    </p>
  );
};

export default FlagDetailLanguages;
