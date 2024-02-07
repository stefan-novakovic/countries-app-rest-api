import "./FlagDetailImage.css";

const FlagDetailImage = ({ detailedCountry }) => {
  return (
    <img
      src={
        detailedCountry.flags.svg
          ? detailedCountry.flags.svg
          : detailedCountry.flags.png
      }
      alt={detailedCountry.name.common + " flag"}
    />
  );
};

export default FlagDetailImage;
