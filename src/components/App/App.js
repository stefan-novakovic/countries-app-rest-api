import "./App.css";
import Header from "../Header/Header";
import { DataProvider } from "../context/DataContext";
import Main from "../Main/Main";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </div>
  );
}

export default App;
