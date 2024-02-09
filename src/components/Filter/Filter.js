import "./Filter.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Filter = () => {
  const { filter, setFilter, setSearch, darkMode } = useContext(DataContext);
  return (
    <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="filter">Filter by Region</label>
      <div
        className={
          darkMode ? "select-wrapper dark-mode" : "select-wrapper light-mode"
        }
      >
        <select
          className={darkMode ? "select dark-mode" : "select light-mode"}
          name="filter"
          id="filter"
          onChange={(e) => {
            setFilter(e.target.value);
            setSearch("");
          }}
        >
          <option value="">{filter ? filter : "Filter by Region"}</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
