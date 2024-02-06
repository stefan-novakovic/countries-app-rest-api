import "./FlagDetailPopulation.css";

const FlagDetailPopulation = ({ detailedCountry }) => {
  return <p>Population: {detailedCountry.population.toLocaleString()}</p>;
};

export default FlagDetailPopulation;
