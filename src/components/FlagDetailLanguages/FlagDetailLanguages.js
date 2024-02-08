const FlagDetailLanguages = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Languages: </span>
      {detailedCountry.languages
        ? Object.values(detailedCountry.languages).reverse().join(", ")
        : "N/A"}
    </p>
  );
};

export default FlagDetailLanguages;
