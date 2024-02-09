import "./Skeleton.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const SkeletonLoadingPagePulse = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <div
      className={
        darkMode
          ? "skeleton-page dark-mode animate-pulse"
          : "skeleton-page light-mode animate-pulse"
      }
    >
      Loading...
    </div>
  );
};

export default SkeletonLoadingPagePulse;
