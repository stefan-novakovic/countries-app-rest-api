import "./FlagDetailCurrencies.css";

const FlagDetailCurrencies = ({ detailedCountry }) => {
  return (
    <p>
      Currencies:{" "}
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
