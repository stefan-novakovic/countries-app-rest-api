import { createContext } from "react";
import { useState, useEffect, useRef } from "react";
import useDebounce from "../../hooks/useDebounce";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const baseUrl = "https://restcountries.com/v3.1";
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const debouncedSearch = useDebounce(search, 625);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );
  const [pageNumber, setPageNumber] = useState(0);
  const infiniteScrollRef = useRef();

  // SAVING DARK MODE PREFERENCE (true/false) TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  // GET REQUESTS AND LOADING INITIAL DATA
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/all?fields=flags,name,region,population,capital`
        );
        if (!response.ok) throw Error("Please reload the app");
        const data = await response.json();
        const dataSortedByCountryNames = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setAllCountries(dataSortedByCountryNames);
        setCountries(dataSortedByCountryNames.slice(0, 20));
        setFetchError("");
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchFilteredData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/region/${filter}?fields=flags,name,region,population,capital`
        );
        if (!response.ok) throw Error("Please reload the app");
        const data = await response.json();
        const dataSortedByCountryNames = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setAllCountries(dataSortedByCountryNames);
        setCountries(dataSortedByCountryNames.slice(0, 20));
        setPageNumber(0);
        setFetchError("");
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchSearchedDataFromAllData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/name/${debouncedSearch.toLowerCase().trim()}`
        );
        if (!response.ok) throw Error("Empty");
        const data = await response.json();
        const dataSortedByCountryNames = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setAllCountries(dataSortedByCountryNames);
        setCountries(dataSortedByCountryNames.slice(0, 20));
        setPageNumber(0);
        setFetchError("");
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchSearchedDataFromFilteredData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/region/${filter}?fields=flags,name,region,population,capital`
        );
        if (!response.ok) throw Error("Please reload the app");
        const data = await response.json();
        const searchedData = data.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase().trim())
        );
        if (searchedData.length === 0) {
          setFetchError("Empty");
        } else {
          setFetchError("");
        }
        const dataSortedByCountryNames = searchedData.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setAllCountries(dataSortedByCountryNames);
        setCountries(dataSortedByCountryNames.slice(0, 20));
        setPageNumber(0);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (filter.length > 0) {
      if (debouncedSearch.length > 0) {
        fetchSearchedDataFromFilteredData();
      } else {
        fetchFilteredData();
      }
    } else if (filter.length === 0 && debouncedSearch.length > 0) {
      fetchSearchedDataFromAllData();
    } else {
      fetchAllData();
    }
  }, [debouncedSearch, filter]);

  // INFINITE SCROLL
  useEffect(() => {
    setCountries(allCountries.slice(0 * 20, (pageNumber + 1) * 20));
  }, [allCountries, pageNumber]);

  // PAGINATION
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setPageNumber((prev) => prev + 1);
    });
    observer.observe(infiniteScrollRef.current);
  }, []);

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
        infiniteScrollRef,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
