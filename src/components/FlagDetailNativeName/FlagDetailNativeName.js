import "./FlagDetailNativeName.css";

const FlagDetailNativeName = ({ detailedCountry }) => {
  return (
    <p>
      <span className="highlight">Native Name: </span>
      {detailedCountry.name.nativeName
        ? detailedCountry.name.nativeName[
            Object.keys(detailedCountry.name.nativeName).pop()
          ].common
        : "N/A"}
    </p>
  );
};

export default FlagDetailNativeName;
