import "./FlagContainer.css";
import FlagCard from "../FlagCard/FlagCard";
import { useState, useEffect } from "react";

const FlagContainer = () => {
  const [countries, setCountries] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=flags,name,region,population,capital"
        );
        if (!response.ok) throw Error("Please reload the app");
        const data = await response.json();

        setFetchError("");
        setCountries(data);
      } catch (err) {
        setFetchError(`Error: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [countries]);

  return (
    <section
      className={
        isLoading || fetchError
          ? "flag-container-isLoading-fetchError"
          : "flag-container"
      }
    >
      {isLoading && <p className="isLoading">Loading...</p>}
      {!isLoading && fetchError && <p className="fetchError">{fetchError}</p>}
      {!isLoading &&
        !fetchError &&
        countries.map((country) => {
          return <FlagCard key={country.name.common} country={country} />;
        })}
    </section>
  );
};

export default FlagContainer;
