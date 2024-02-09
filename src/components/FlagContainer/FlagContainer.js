import "./FlagContainer.css";
import FlagCard from "../FlagCard/FlagCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import SkeletonCard from "../Skeleton/SkeletonCard";

const FlagContainer = () => {
  const { countries, fetchError, isLoading, darkMode } =
    useContext(DataContext);
  return (
    <section
      className={
        !isLoading && fetchError
          ? "flag-container-fetchError"
          : "flag-container"
      }
    >
      {isLoading &&
        [...Array(20).keys()].map((i) => {
          return <SkeletonCard key={i} />;
        })}
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
