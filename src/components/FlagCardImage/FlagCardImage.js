import "./FlagCardImage.css";

const FlagCardImage = ({ country }) => {
  return (
    <div className="card__img-wrapper">
      <img
        src={country.flags.png ? country.flags.png : country.flags.svg}
        alt={country.name.common + " flag"}
      />
    </div>
  );
};

export default FlagCardImage;
