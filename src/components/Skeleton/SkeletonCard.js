import Skeleton from "./Skeleton";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const SkeletonCard = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <div
      className={
        darkMode ? "skeleton-card dark-mode" : "skeleton-card light-mode"
      }
    >
      <Skeleton classes={darkMode ? "image dark-mode" : "image light-mode"} />
      <div className="skeleton-card__text-container">
        <Skeleton
          classes={
            darkMode ? "title dark-mode width-70" : "title light-mode width-70"
          }
        />
        <Skeleton
          classes={
            darkMode ? "text dark-mode width-100" : "text light-mode width-100"
          }
        />
        <Skeleton
          classes={
            darkMode ? "text dark-mode width-100" : "text light-mode width-100"
          }
        />
        <Skeleton
          classes={
            darkMode ? "text dark-mode width-100" : "text light-mode width-100"
          }
        />
      </div>
    </div>
  );
};

export default SkeletonCard;
