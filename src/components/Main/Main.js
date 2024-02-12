import "./Main.css";
import { lazy, Suspense } from "react";
import FlagPage from "../FlagPage/FlagPage";
import Missing from "../Missing/Missing";
import SkeletonLoadingPage from "../Skeleton/SkeletonLoadingPage";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useLocation } from "react-router-dom";
const FlagDetailPage = lazy(() => import("../FlagDetailPage/FlagDetailPage"));

const Main = () => {
  const { infiniteScrollRef } = useContext(DataContext);
  let location = useLocation();
  return (
    <main className="main">
      <Routes>
        <Route path="/">
          <Route index element={<FlagPage />} />
          <Route path="country/:fullname">
            <Route
              index
              element={
                <Suspense fallback={<SkeletonLoadingPage />}>
                  <FlagDetailPage />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <div
        className={
          location.pathname !== "/"
            ? "scroll-threshold dispNone"
            : "scroll-threshold"
        }
        ref={infiniteScrollRef}
      ></div>
    </main>
  );
};

export default Main;
