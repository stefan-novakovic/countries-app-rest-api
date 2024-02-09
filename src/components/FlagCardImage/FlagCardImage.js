import "./FlagCardImage.css";
import useWindowSize from "../../hooks/useWindowResize";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const FlagCardImage = ({ country }) => {
  const { width } = useWindowSize();
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
        placeholderSrc="https://idejupr.lt/img/0e86394b844d5a56904444f7a7b38c93.gif"
      />
    </div>
  );
};

export default FlagCardImage;
