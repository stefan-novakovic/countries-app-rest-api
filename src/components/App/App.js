import "./App.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { DataProvider } from "../context/DataContext";

function App() {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Content />
      </DataProvider>
    </div>
  );
}

export default App;
