import "./FlagDetailBackButton.css";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

import { Link } from "react-router-dom";

const FlagDetailBackButton = () => {
  return (
    <Link to="/">
      <button className="back-button" type="button" tabIndex="-1">
        <LiaLongArrowAltLeftSolid />
        Back
      </button>
    </Link>
  );
};

export default FlagDetailBackButton;
