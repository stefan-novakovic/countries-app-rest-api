import "./FlagDetailBackButton.css";
import { Link } from "react-router-dom";

const FlagDetailBackButton = () => {
  return (
    <Link to="/" style={{ width: "min-content" }}>
      <button type="button">Back</button>
    </Link>
  );
};

export default FlagDetailBackButton;
