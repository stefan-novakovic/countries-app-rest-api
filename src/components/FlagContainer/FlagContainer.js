import "./FlagContainer.css";
import FlagCard from "../FlagCard/FlagCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const FlagContainer = () => {
  const { countries, fetchError, isLoading, darkMode } =
    useContext(DataContext);
  return (
    <section
      className={
        isLoading || fetchError
          ? "flag-container-isLoading-fetchError"
          : "flag-container"
      }
    >
      {isLoading && (
        <p
          className={darkMode ? "isLoading dark-mode" : "isLoading light-mode"}
        >
          Loading...
        </p>
      )}
      {!isLoading && fetchError && (
        <p
          className={
            fetchError === "Empty"
              ? darkMode
                ? "isLoading dark-mode"
                : "isLoading light-mode"
              : "fetchError"
          }
        >
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        countries.map((country) => {
          return <FlagCard key={country.name.common} country={country} />;
        })}
    </section>
  );
};

export default FlagContainer;
