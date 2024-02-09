import "./FlagDetailImage.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FlagDetailImage = ({ detailedCountry }) => {
  return (
    <LazyLoadImage
      alt={detailedCountry.name.common + " flag"}
      src={
        detailedCountry.flags.svg
          ? detailedCountry.flags.svg
          : detailedCountry.flags.png
      }
      effect="blur"
    />
  );
};

export default FlagDetailImage;
