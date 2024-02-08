import "./FlagCardImage.css";
import useWindowSize from "../../hooks/useWindowResize";

const FlagCardImage = ({ country }) => {
  const { width } = useWindowSize();
  return (
    <div className="card__img-wrapper">
      <img
        src={
          width >= 768 && country.flags.png
            ? country.flags.png
            : country.flags.svg
            ? country.flags.svg
            : country.flags.png
        }
        alt={country.name.common + " flag"}
        loading="lazy"
      />
    </div>
  );
};

export default FlagCardImage;
