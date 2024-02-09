import "./App.css";
import { DataProvider } from "../context/DataContext";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <ContentWrapper />
      </DataProvider>
    </div>
  );
}

export default App;
