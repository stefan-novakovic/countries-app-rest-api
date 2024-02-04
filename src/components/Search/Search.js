import "./Search.css";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search for a country</label>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
        />
        <IoIosSearch />
      </div>
    </form>
  );
};

export default Search;
