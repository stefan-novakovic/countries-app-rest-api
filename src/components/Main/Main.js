import "./Main.css";
import { lazy, Suspense } from "react";
import FlagPage from "../FlagPage/FlagPage";
import Missing from "../Missing/Missing";
import SkeletonLoadingPage from "../Skeleton/SkeletonLoadingPage";
import { Routes, Route } from "react-router-dom";
const FlagDetailPage = lazy(() => import("../FlagDetailPage/FlagDetailPage"));

const Main = () => {
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
    </main>
  );
};

export default Main;
