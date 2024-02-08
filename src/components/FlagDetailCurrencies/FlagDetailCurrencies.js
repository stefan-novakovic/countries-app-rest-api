const FlagDetailCurrencies = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Currencies: </span>
      {detailedCountry.currencies
        ? Object.values(detailedCountry.currencies)
            .map((currency) => {
              return currency.name;
            })
            .join(", ")
        : "N/A"}
    </p>
  );
};

export default FlagDetailCurrencies;
