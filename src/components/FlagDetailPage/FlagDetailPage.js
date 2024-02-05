import "./FlagDetailPage.css";
import { useParams } from "react-router-dom";

const FlagDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>{`Hello ${id}`}</h1>
      {/* Country request link example */}
      {/* "https://restcountries.com/v3.1/name/serbia?fullText=true" */}
    </div>
  );
};

export default FlagDetailPage;
