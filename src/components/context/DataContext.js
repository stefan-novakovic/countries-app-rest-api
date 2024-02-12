import { createContext } from "react";
import { useState, useEffect, useRef } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const baseUrl = "https://restcountries.com/v3.1";
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [allFilteredCountries, setAllFilteredCountries] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );
  const myInfiniteScrollRef = useRef();
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const fetchData = async () => {
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

        setPageNumber(0);
        setAllFilteredCountries(dataSortedByCountryNames);
        setCountries(dataSortedByCountryNames.slice(0, 20));
        setFetchError("");
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (filter.length > 0) {
      fetchFilteredData();
    } else {
      fetchData();
    }
  }, [filter]);

  useEffect(() => {
    setCountries(allCountries.slice(0 * 20, (pageNumber + 1) * 20));
  }, [allCountries, pageNumber]);

  useEffect(() => {
    if (filter.length > 0)
      setCountries(allFilteredCountries.slice(0 * 20, (pageNumber + 1) * 20));
  }, [filter, allFilteredCountries, pageNumber]);

  // const fetchFilteredCountries = useCallback(async () => {

  // const fetchSearchedCountries = useCallback(async () => {
  //   try {
  //     if (filter.length === 0) {
  //       const response = await fetch(
  //         `${baseUrl}/name/${search.toLowerCase().trim()}`
  //       );
  //       if (!response.ok) throw Error("Empty");
  //       const data = await response.json();
  //       const dataSortedByCountryNames = data.sort((a, b) =>
  //         a.name.common.localeCompare(b.name.common)
  //       );

  //       setCountries(dataSortedByCountryNames);
  //       setFetchError("");
  //     } else {
  //       const response = await fetch(
  //         `${baseUrl}/region/${filter}?fields=flags,name,region,population,capital`
  //       );
  //       if (!response.ok) throw Error("Empty");
  //       const data = await response.json();
  //       const filterData = data.filter((item) =>
  //         item.name.common.toLowerCase().includes(search.toLowerCase().trim())
  //       );

  //       if (filterData.length === 0) {
  //         setFetchError("Empty");
  //       } else {
  //         setFetchError("");
  //       }
  //       const dataSortedByCountryNames = filterData.sort((a, b) =>
  //         a.name.common.localeCompare(b.name.common)
  //       );

  //       setCountries(dataSortedByCountryNames);
  //     }
  //   } catch (err) {
  //     setFetchError(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [filter, search]);

  // // INITIAL LOAD AND SEARCH
  // useEffect(() => {
  //   if (search.length > 0) {
  //     fetchSearchedCountries();
  //   } else {
  //     if (filter.length === 0) {
  //       // AAAAAAAAAAAAAAAAAAAAA
  //     } else {
  //       fetchFilteredCountries();
  //     }
  //   }
  // }, [
  //   search,
  //   filter,
  //   fetchSearchedCountries,
  //   fetchFilteredCountries,
  //   allCountries,
  // ]);

  // // FILTER
  // useEffect(() => {
  //   fetchFilteredCountries();
  // }, [fetchFilteredCountries]);

  // INFINITE SCROLL AND PAGINATION
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setPageNumber((prev) => prev + 1);
    });
    observer.observe(myInfiniteScrollRef.current);
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
        myInfiniteScrollRef,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
