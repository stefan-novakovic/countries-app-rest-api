import "./FlagDetailBorderCountries.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

export const FlagDetailBorderCountries = ({ detailedCountry }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { darkMode } = useContext(DataContext);

  useEffect(() => {
    const fetchCountryFields = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3"
        );
        if (!response.ok) throw Error("Please reload the app");

        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountryFields();
  }, []);

  return (
    <div className="border-countries-container">
      <div className="countries-label">Border Countries: &nbsp;</div>
      <div className="countries">
        {!isLoading && detailedCountry.borders ? (
          detailedCountry.borders.map((country) => {
            const countryName = countries.find(
              (countryObj) => countryObj.cca3 === country
            ).name.common;

            return (
              <Link
                key={country}
                to={`/country/${countryName}`}
                className={darkMode ? "dark-mode" : "light-mode"}
              >
                {countryName}
              </Link>
            );
          })
        ) : (
          <p className="none-border-countries">None</p>
        )}
      </div>
    </div>
  );
};

export default FlagDetailBorderCountries;
