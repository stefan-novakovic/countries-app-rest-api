import { createContext, useCallback } from "react";
import { useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=flags,name,region,population,capital"
      );
      if (!response.ok) throw Error("Please reload the app");
      const data = await response.json();
      const dataSortedByCountryNames = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      setCountries(dataSortedByCountryNames);
      setFetchError("");
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFilteredCountries = useCallback(async () => {
    if (filter) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${filter}?fields=flags,name,region,population,capital`
        );
        if (!response.ok) throw Error("Empty");
        const data = await response.json();
        const dataSortedByCountryNames = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(dataSortedByCountryNames);
        setFetchError("");
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [filter]);

  const fetchSearchedCountries = useCallback(async () => {
    try {
      if (filter.length === 0) {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${search.toLowerCase().trim()}`
        );
        if (!response.ok) throw Error("Empty");
        const data = await response.json();
        const dataSortedByCountryNames = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(dataSortedByCountryNames);
        setFetchError("");
      } else {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${filter}?fields=flags,name,region,population,capital`
        );
        if (!response.ok) throw Error("Empty");
        const data = await response.json();
        const filterData = data.filter((item) =>
          item.name.common.toLowerCase().includes(search.toLowerCase().trim())
        );

        if (filterData.length === 0) {
          setFetchError("Empty");
        } else {
          setFetchError("");
        }
        const dataSortedByCountryNames = filterData.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(dataSortedByCountryNames);
      }
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [filter, search]);

  // INITIAL LOAD AND SEARCH
  useEffect(() => {
    if (search.length > 0) {
      fetchSearchedCountries();
    } else {
      if (filter.length === 0) {
        fetchData();
      } else {
        fetchFilteredCountries();
      }
    }
  }, [search, filter, fetchSearchedCountries, fetchFilteredCountries]);

  // FILTER
  useEffect(() => {
    fetchFilteredCountries();
  }, [fetchFilteredCountries]);

  return (
    <DataContext.Provider
      value={{
        countries,
        setCountries,
        fetchError,
        setFetchError,
        isLoading,
        setIsLoading,
        search,
        setSearch,
        filter,
        setFilter,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
