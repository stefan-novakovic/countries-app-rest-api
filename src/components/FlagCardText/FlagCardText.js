import "./FlagCardText.css";

const FlagCardText = ({ country }) => {
  return (
    <div className="card__text">
      <h2>{country.name.common}</h2>
      <p>
        <span className="highlight">Population: </span>
        {country.population.toLocaleString()}
      </p>
      <p>
        <span className="highlight">Region: </span>
        {country.region}
      </p>
      <p>
        <span className="highlight">Capital: </span>
        {typeof country.capital !== "undefined" && country.capital.length > 0
          ? country.capital.join(", ")
          : country.name.common === "Macau"
          ? "Macau"
          : "N/A"}
      </p>
    </div>
  );
};

export default FlagCardText;
