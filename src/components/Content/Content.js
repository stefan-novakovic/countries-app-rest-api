import "./Content.css";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import FlagContainer from "../FlagContainer/FlagContainer";

const Content = () => {
  return (
    <main className="content">
      <div className="input-container">
        <Search />
        <Filter />
      </div>

      <FlagContainer />
    </main>
  );
};

export default Content;
