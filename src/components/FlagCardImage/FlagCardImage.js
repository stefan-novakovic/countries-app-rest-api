import "./FlagCardImage.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import placeholderImageLight from "../../images/loading-light-mode.gif";
// import placeholderImageDark from "../../images/loading-dark-mode.gif";
// import { useContext } from "react";
// import DataContext from "../context/DataContext";

const FlagCardImage = ({ country }) => {
  // const { darkMode } = useContext(DataContext);
  return (
    <div className="card__img-wrapper" style={{ background: country.flag }}>
      {/* <LazyLoadImage
        alt={country.name.common + " flag"}
        src={country.flags.png}
        placeholderSrc={darkMode ? placeholderImageDark : placeholderImageLight}
      /> */}
      <picture>
        <source media="(max-width: 767px)" srcSet={country.flags.svg} />
        <img
          alt={country.name.common + " flag"}
          src={country.flags.png}
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default FlagCardImage;
