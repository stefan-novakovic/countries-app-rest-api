import "./App.css";
import Header from "../Header/Header";
import FlagPage from "../FlagPage/FlagPage";
import FlagDetailPage from "../FlagDetailPage/FlagDetailPage";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { darkMode } = useContext(DataContext);
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <main
          className={darkMode ? "main dark-mode" : "main light-mode"}
        >
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<FlagPage />} />
                <Route path="country/:id">
                  <Route index element={<FlagDetailPage />} />
                </Route>
                <Route path="*" element={<p>Not found</p>} />
              </Route>
            </Routes>
          </Router>
        </main>
      </DataProvider>
    </div>
  );
}

export default App;
