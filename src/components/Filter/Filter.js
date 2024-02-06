import "./Filter.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Filter = () => {
  const { setFilter, setSearch, darkMode } = useContext(DataContext);
  return (
    <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="filter">Filter by Region</label>
      <select
        className={darkMode ? "select dark-mode" : "select light-mode"}
        name="filter"
        id="filter"
        onChange={(e) => {
          setFilter(e.target.value);
          setSearch("");
        }}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Filter;
