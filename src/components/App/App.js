import "./App.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { DataProvider } from "../context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Content />
      </DataProvider>
    </div>
  );
}

export default App;
