import "./FlagDetailImage";

const FlagDetailImage = ({ detailedCountry }) => {
  return (
    <img
      style={{ width: "500px", height: "350px" }}
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
