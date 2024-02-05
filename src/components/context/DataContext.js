import { createContext } from "react";
import { useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=flags,name,region,population,capital"
      );
      if (!response.ok) throw Error("Please reload the app");
      const data = await response.json();

      setCountries(data);
      setFetchError("");
    } catch (err) {
      setFetchError(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSearchedCountries = async () => {
    try {
      if (filter.length === 0) {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${search.toLowerCase().trim()}`
        );
        if (!response.ok) throw Error("Empty");
        const data = await response.json();

        setCountries(data);
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
        setCountries(filterData);
      }
    } catch (err) {
      setFetchError(`${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFilteredCountries = async () => {
    if (filter) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${filter}?fields=flags,name,region,population,capital`
        );
        if (!response.ok) throw Error("Empty");
        const data = await response.json();

        setCountries(data);
        setFetchError("");
      } catch (err) {
        setFetchError(`${err.message}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // INITIAL LOAD
  useEffect(() => {
    fetchData();
  }, []);

  // SEARCH
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
  }, [search, filter]);

  // FILTER
  useEffect(() => {
    fetchFilteredCountries();
  }, [filter]);

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
        setFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
