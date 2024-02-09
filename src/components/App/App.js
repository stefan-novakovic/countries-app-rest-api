import "./App.css";
import { DataProvider } from "../context/DataContext";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<ContentWrapper />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
