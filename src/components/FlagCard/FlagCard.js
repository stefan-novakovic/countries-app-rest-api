import "./FlagCard.css";

const FlagCard = ({ country }) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img
          src={country.flags.png ? country.flags.png : country.flags.svg}
          alt="Germany flag"
        />
      </div>

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
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default FlagCard;
