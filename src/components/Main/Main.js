import "./Main.css";
import FlagPage from "../FlagPage/FlagPage";
import FlagDetailPage from "../FlagDetailPage/FlagDetailPage";
import Missing from "../Missing/Missing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Main = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <main className={darkMode ? "main dark-mode" : "main light-mode"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<FlagPage />} />
            <Route path="country/:fullname">
              <Route index element={<FlagDetailPage />} />
            </Route>
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default Main;
