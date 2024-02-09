import "./FlagCardImage.css";
import useWindowSize from "../../hooks/useWindowResize";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImageLight from "../../images/loading-light-mode.gif";
import placeholderImageDark from "../../images/loading-dark-mode.gif";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const FlagCardImage = ({ country }) => {
  const { width } = useWindowSize();
  const { darkMode } = useContext(DataContext);
  return (
    <div className="card__img-wrapper" style={{ background: country.flag }}>
      <LazyLoadImage
        alt={country.name.common + " flag"}
        src={
          width >= 768 && country.flags.png
            ? country.flags.png
            : country.flags.svg
            ? country.flags.svg
            : country.flags.png
        }
        placeholderSrc={darkMode ? placeholderImageDark : placeholderImageLight}
      />
    </div>
  );
};

export default FlagCardImage;
