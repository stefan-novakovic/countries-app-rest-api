import "./Filter.css";

const Filter = () => {
  return (
    <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="filter">Filter by Region</label>
      <select name="filter" id="filter">
        <option value="0">Filter by Region</option>
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
