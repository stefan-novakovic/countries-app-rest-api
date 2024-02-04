import "./FlagContainer.css";
import FlagCard from "../FlagCard/FlagCard";
import { useState, useEffect } from "react";

const FlagContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=flags,name,region,population,capital"
        );
        if (!response.ok) throw Error("Please reload the app");
        const data = await response.json();
        setCountries(data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <section className="flag-container">
      {countries.map((country) => {
        return <FlagCard key={country.name.common} country={country} />;
      })}
    </section>
  );
};

export default FlagContainer;
