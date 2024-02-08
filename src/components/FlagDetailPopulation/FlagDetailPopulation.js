const FlagDetailPopulation = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Population: </span>
      {detailedCountry.population.toLocaleString()}
    </p>
  );
};

export default FlagDetailPopulation;
