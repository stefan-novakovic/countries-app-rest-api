import "./InputContainer.css";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";

const InputContainer = () => {
  return (
    <div className="input-container">
      <Search />
      <Filter />
    </div>
  );
};

export default InputContainer;
