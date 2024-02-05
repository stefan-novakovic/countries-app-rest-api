import "./Search.css";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Search = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search for a country</label>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={search}
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoIosSearch />
      </div>
    </form>
  );
};

export default Search;
